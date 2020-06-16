/* eslint-disable @typescript-eslint/no-use-before-define,no-undef,@typescript-eslint/camelcase */
// ==UserScript==
// @namespace https://dotennin.blogspot.com/
// @name 百度网盘下载管理器(beta)
// @description A download manager for Baidu Yun
// @version 0.1
// @author Dotennin
// @license MIT
// @compatible        chrome 测试通过
// @compatible        firefox 未测试
// @compatible        opera 未测试
// @compatible        safari 未测试
// @include https://pan.baidu.com/disk/*
// @connect baidu.com
// @connect qdall01.baidupcs.com
// @resource cssProgressBar https://dotennin.github.io/css-progress-bar/css-progress-bar.css
// @grant GM_setClipboard
// @grant GM_xmlhttpRequest
// @grant GM_getResourceText
// @grant GM_download
// @grant GM_addStyle
// @grant GM_notification
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @run-at document-idle
// ==/UserScript==

const InstanceForSystem = {
  list: require('system-core:context/context.js').instanceForSystem.list,
  autoStart: true,
  maxDownloadCount: 1,
  downloadingItems: {},
  completedItems: {},
  allDownloads: {},

  get selectedList() {
    return this.list
      .getSelected()
      .filter(arr => {
        if (arr.isdir === 1) {
          isDir = true
          return false
        }
        return true
      })
      .map(item => new Item(item))
  },

  get itemsFromQueue() {
    const queue = {}
    const filterKeys = Object.keys(
      Object.assign(this.downloadingItems, this.completedItems)
    )
    Object.keys(this.allDownloads).forEach(fs_id => {
      if (!filterKeys.includes(fs_id)) {
        queue[fs_id] = this.allDownloads[fs_id]
      }
    })
    return queue
  },

  get downloadable() {
    return Object.keys(this.downloadingItems).length < this.maxDownloadCount
  },

  get currentList() {
    return this.list.getCurrentList().map(item => new Item(item))
  },
}

class Item {
  category
  fs_id
  isdir
  local_ctime
  local_mtime
  md5
  oper_id
  path
  privacy
  server_atime
  server_ctime
  server_filename
  server_mtime
  share
  size
  unlist
  url
  constructor(props) {
    Object.assign(this, props)
  }
}

// const selectedObject = GM_getValue('selectedObject', {})
!(function() {
  initStyle()

  let task = setInterval(() => {
    let dom,
      t = document.querySelector(
        'a.g-button[data-button-id][title=\u4e0b\u8f7d]'
      )
    if (t) {
      clearInterval(task)
      dom = t.cloneNode(true)
      t.after(dom)
      dom.removeAttribute('style')
      t.remove()
      dom.addEventListener('click', () => {
        const dom = window.event.currentTarget
        const {
          selectedList,
          downloadable,
          allDownloads,
          autoStart,
        } = InstanceForSystem
        dom.setAttribute('style', 'background-color: #09e; color: #fff')

        const requestList = []
        selectedList.forEach(arr => {
          if (typeof allDownloads[arr.fs_id] === 'undefined') {
            allDownloads[arr.fs_id] = arr
            requestList.push(getDownloadUrl(arr))
          }
        })
        openModal()
        Promise.all(requestList).then(arrs => {
          dom.removeAttribute('style')
          arrs.forEach(arr => {
            if (autoStart && downloadable) {
              document.querySelector(`div[data-label="${arr.fs_id}"]`).click()
            }
          })
        })
      })
    }
  }, 1e3)
})()

// @require https://jimmywarting.github.io/StreamSaver.js/StreamSaver.js
// function download(e) {
//   e.currentTarget.style.pointerEvents = 'none'
//   const arr = selectedObject[e.currentTarget.attributes['data-label'].value]
//   const { url, server_filename } = arr
//   let preLoaded = 0
//   let currentLoaded = 0
//   const percentOverlay = e.currentTarget
//   const progressRadial = e.currentTarget.parentElement
//   const speedOverlay = e.currentTarget
//     .closest('tr')
//     .querySelector('td[data-label="speed"]')
//   let headers = new Headers({
//     Host: 'qdall01.baidupcs.com',
//     Accept: '*/*',
//     'User-Agent': 'netdisk;P2SP;2.2.60.26',
//     'Accept-Encoding': 'identity',
//     'Accept-Language': 'ja-JP',
//     'Accept-Charset': '*',
//   })
//   fetch(url, {
//     method: 'GET',
//     responseType: 'blob',
//     headers,
//   })
//     .then(response => {
//       if (response.status !== 200) {
//         throw `${response.status} ${response.statusText}`
//       }
//       const total = Number.parseInt(response.headers.get('Content-Length'))
//       const fileStream = streamSaver.createWriteStream(server_filename, {
//         size: arr.size,
//       })
//       const writer = fileStream.getWriter()
//
//       const reader = response.body.getReader()
//
//       const pump = () =>
//         reader.read().then(({ done, value }) => {
//           if (done) {
//             clearInterval(progressLoader)
//             progressRadial.className = `progress-radial progress-100`
//             percentOverlay.innerText = `100%`
//             speedOverlay.innerText = ''
//             return writer.close()
//           } else {
//             const percent = Math.round((currentLoaded * 100) / total)
//             progressRadial.className = `progress-radial progress-${percent}`
//             percentOverlay.innerText = `${percent}%`
//             currentLoaded += value.length
//             return writer.write(value).then(pump)
//           }
//         })
//
//       pump()
//     })
//     .catch(error => {
//       alert(error)
//       percentOverlay.style.pointerEvents = ''
//     })
//
//   const progressLoader = setInterval(() => {
//     if (currentLoaded) {
//       const speed = Math.round((currentLoaded - preLoaded) / 1024)
//       preLoaded = currentLoaded
//       speedOverlay.innerText =
//         speed <= 1000
//           ? `${speed} KiB/S`
//           : `${Math.round(speed / 10.24) / 100} MiB/S`
//     }
//   }, 1000)
// }

function addNextDownloadRequest() {
  const fs_ids = Object.keys(InstanceForSystem.itemsFromQueue)
  if (fs_ids.length > 0) {
    document.querySelector(`div[data-label="${fs_ids[0]}"]`).click()
  }
}

function downloadWithGM(e) {
  if (!InstanceForSystem.downloadable) {
    return
  }

  e.currentTarget.style.pointerEvents = 'none'
  const arr =
    InstanceForSystem.allDownloads[
      e.currentTarget.attributes['data-label'].value
    ]
  InstanceForSystem.downloadingItems[arr.fs_id] = arr
  const { url, server_filename } = arr
  let loaded = 0
  let currentEvent = undefined
  const percentOverlay = e.currentTarget
  const progressRadial = e.currentTarget.parentElement
  const speedOverlay = e.currentTarget
    .closest('tr')
    .querySelector('td[data-label="speed"]')
  const request = GM_download({
    url,
    name: server_filename,
    saveAs: true,
    headers: {
      Host: 'qdall01.baidupcs.com',
      Accept: '*/*',
      'User-Agent': 'netdisk;P2SP;2.2.60.26',
      'Accept-Encoding': 'identity',
      'Accept-Language': 'ja-JP',
      'Accept-Charset': '*',
    },
    onprogress: e => {
      currentEvent = e

      const percent = Math.round(
        (currentEvent.loaded * 100) / currentEvent.total
      )
      progressRadial.className = `progress-radial progress-${percent}`
      percentOverlay.innerText = `${percent}%`
    },
    onload: e => {
      clearInterval(progressLoader)
      progressRadial.className = `progress-radial progress-100`
      percentOverlay.innerText = `100%`
      speedOverlay.innerText = ''
      InstanceForSystem.completedItems[arr.fs_id] = arr
      delete InstanceForSystem.downloadingItems[arr.fs_id]

      GM_notification({
        text: '下载完成',
        title: server_filename,
        highlight: true,
      })

      addNextDownloadRequest()
    },
    onerror: e => {
      GM_notification({
        text: JSON.stringify(e),
        title: '出错啦 ！！',
        highlight: true,
      })
      percentOverlay.style.pointerEvents = ''
      speedOverlay.innerText = '出错啦 ！！'
      addNextDownloadRequest()
    },
  })

  const progressLoader = setInterval(() => {
    if (currentEvent) {
      const speed = currentEvent.loaded - loaded
      loaded = currentEvent.loaded
      speedOverlay.innerText = `${formatByte(speed)}/秒`
    }
  }, 1000)
}
function formatByte(byte) {
  const KiByte = Math.round(byte / 1024)
  return KiByte <= 1000
    ? `${KiByte} KiB`
    : `${Math.round(KiByte / 10.24) / 100} MiB`
}
function getDownloadUrl(arr) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url:
        'http://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&ver=2.0&method=locatedownload&path=' +
        encodeURIComponent(arr.path),
      method: 'GET',
      responseType: 'json',
      headers: {
        'User-Agent': 'netdisk;P2SP;2.2.60.26',
      },
      onload: r => {
        if (r.response.hasOwnProperty('client_ip')) {
          const url =
            r.response.urls[0].url +
            '&filename=' +
            encodeURIComponent(arr.server_filename)
          // document
          //   .querySelector(".code")
          //   .insertAdjacentHTML("beforeend", url + "\n");
          arr.url = url
          appendRow(arr)

          return resolve(arr)
        } else {
          // Todo return error message
          return reject(r)
        }
      },
    })
  })
}

function openModal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  modalWrapper.className = modalWrapper.className + ' open'
}

function closeModal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  modalWrapper.className = 'modal-wrapper'
  document.querySelector('#copy-code').className = 'disable'
}

function copyCode() {
  const urlElements = document.querySelector('.code')
  window.getSelection().selectAllChildren(urlElements)
  GM_setClipboard(urlElements.innerText, 'text')
}

function appendRow(arr) {
  document.getElementById('popup-tbody').insertAdjacentHTML(
    'beforeend',
    `
        <tr>
          <td data-label="filename">${arr.server_filename}</td>
          <td data-label="url">${formatByte(arr.size)}</td>
          <td data-label="download">
            <div class="wrap">
              <div class="progress-radial progress-0">
                <div data-label="${arr.fs_id}" class="overlay">0%</div>
              </div>
            </div>
          </td>
          <td data-label="speed">队列等待中</td>
        </tr>
  `
  )

  document
    .querySelector(`div[data-label="${arr.fs_id}"]`)
    .addEventListener('click', downloadWithGM)
}

function initStyle() {
  const newCSS = GM_getResourceText('cssProgressBar')
  GM_addStyle(newCSS)
  document.body.insertAdjacentHTML(
    'beforeend',
    `
        <div class="modal-wrapper">
            <div class="modal-overlay"></div>
            <div class="modal-window">
                <div class="modal-content">
<!--                    <button id="copy-code" class="disable">复制到剪切板</button>-->
              <table>
                <thead>
                  <tr>
                    <th scope="col">文件</th>
                    <th scope="col">大小</th>
                    <th scope="col">下载</th>
                    <th scope="col">速度</th>
                  </tr>
                </thead>
                <tbody id="popup-tbody"></tbody>
              </table>
                </div>
<!--                <span class="modal-close">×</a>-->
            </div>
        </div>
    `
  )

  document
    .querySelectorAll('.modal-overlay,.modal-close')
    .forEach(e => e.addEventListener('click', closeModal))
  // document.getElementById('copy-code').addEventListener('click', copyCode)
}
