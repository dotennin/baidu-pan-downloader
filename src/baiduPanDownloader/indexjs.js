/* eslint-disable @typescript-eslint/no-use-before-define,no-undef,@typescript-eslint/camelcase */
// ==UserScript==
// @namespace https://dotennin.blogspot.com/
// @name 百度网盘下载管理器-alpha
// @description A download manager for Baidu Yun
// @version 0.2
// @author Dotennin
// @license MIT
// @compatible        chrome/83.0.4103.97 passed
// @compatible        edge/83.0.478.54 passed
// @compatible        firefox untested
// @compatible        opera untested
// @compatible        safari untested
// @include https://pan.baidu.com/disk/*
// @connect baidu.com
// @connect qdall01.baidupcs.com
// @resource customStyle https://dotennin.github.io/baidu-disk-straight-chain/src/baiduPanDownloader/style.css
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
window.onunload = () => {
  GM_setValue('downloadingItems', InstanceForSystem.downloadingItems)
  GM_setValue('stoppedItems', InstanceForSystem.stoppedItems)
  GM_setValue('completedItems', InstanceForSystem.completedItems)

  InstanceForSystem.stopAll()
}

const InstanceForSystem = {
  list: require('system-core:context/context.js').instanceForSystem.list,
  autoStart: true,
  maxDownloadCount: 1,
  downloadingItems: {},
  stoppedItems: {},
  completedItems: {},
  allDownloads: {},

  get selectedList() {
    const objectFromValue = Object.assign(GM_getValue('downloadingItems', {}), GM_getValue('stoppedItems', {}))
    GM_deleteValue('downloadingItems')
    GM_deleteValue('stoppedItems')

    return this.list
      .getSelected()
      .filter((arr) => {
        if (arr.isdir === 1) {
          return false
        }
        return true
      })
      .map((item) => new Item(item))
      .concat(Object.values(objectFromValue))
  },

  get itemsFromQueue() {
    const queue = {}
    const filterKeys = Object.keys(Object.assign({}, this.downloadingItems, this.completedItems, this.stoppedItems))

    Object.keys(this.allDownloads).forEach((fs_id) => {
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
    return this.list.getCurrentList().map((item) => new Item(item))
  },

  stopAll: function() {
    Object.values(this.downloadingItems).forEach((item) => {
      item.request.abort()
    })
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

!(function() {
  initStyle()
  startInstance()

  document.getElementById('floating-button').addEventListener('click', () => {
    openModal()
    startInstance()
  })
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
  for (const fs_id in InstanceForSystem.itemsFromQueue) {
    downloadItem(InstanceForSystem.allDownloads[fs_id])
  }
}

function downloadItem(arr) {
  // Remove Item if target still in stop cluster
  if (InstanceForSystem.stoppedItems[arr.fs_id]) {
    delete InstanceForSystem.stoppedItems[arr.fs_id]
  }

  const operationButton = document.querySelector(`button[data-label="${arr.fs_id}"]`)
  if (!InstanceForSystem.downloadable) {
    operationButton.innerText = '等待中'
    return
  }

  InstanceForSystem.downloadingItems[arr.fs_id] = arr
  const { url, server_filename } = arr
  let loaded = 0
  let currentEvent = undefined
  const percentOverlay = document.querySelector(`div[data-label="${arr.fs_id}"]`)
  const progressRadial = percentOverlay.parentElement
  const speedOverlay = percentOverlay.closest('tr').querySelector('td[data-label="speed"]')
  operationButton.innerText = '停止'
  arr.request = GM_download({
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
    onprogress: (e) => {
      currentEvent = e

      const percent = Math.round((currentEvent.loaded * 100) / currentEvent.total)
      progressRadial.className = `progress-radial progress-${percent}`
      percentOverlay.innerText = `${percent}%`
    },
    onload: (e) => {
      clearInterval(arr.progressLoader)
      progressRadial.className = 'progress-radial progress-100'
      percentOverlay.innerText = '100%'
      speedOverlay.innerText = ''
      operationButton.innerText = '重新下载'
      InstanceForSystem.completedItems[arr.fs_id] = arr
      delete InstanceForSystem.downloadingItems[arr.fs_id]

      GM_notification({
        text: '下载完成',
        title: server_filename,
        highlight: true,
      })

      addNextDownloadRequest()
    },
    onerror: (e) => {
      clearInterval(arr.progressLoader)
      progressRadial.className = 'progress-radial progress-0'
      percentOverlay.innerHTML = `<span style="color: red">error</span>`
      operationButton.innerText = '重新下载'
      speedOverlay.innerText = ''
      InstanceForSystem.stoppedItems[arr.fs_id] = arr
      delete InstanceForSystem.downloadingItems[arr.fs_id]

      addNextDownloadRequest()
    },
  })

  arr.progressLoader = setInterval(() => {
    if (currentEvent) {
      const speed = currentEvent.loaded - loaded
      loaded = currentEvent.loaded
      speedOverlay.innerText = `${formatByte(speed)}/秒`
    }
  }, 1000)
}
function formatByte(byte) {
  const KiByte = Math.round(byte / 1024)
  return KiByte <= 1000 ? `${KiByte} KiB` : `${Math.round(KiByte / 10.24) / 100} MiB`
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
      onload: (r) => {
        if (r.response.hasOwnProperty('client_ip')) {
          const url = r.response.urls[0].url + '&filename=' + encodeURIComponent(arr.server_filename)
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
}

function appendRow(arr) {
  document.getElementById('popup-tbody').insertAdjacentHTML(
    'beforeend',
    `
        <tr id="row-${arr.fs_id}">
          <td data-label="filename">${arr.server_filename}</td>
          <td data-label="download">
            <div class="wrap">
              <div class="progress-radial progress-0">
                <div data-label="${arr.fs_id}" class="overlay">0%</div>
              </div>
            </div>
          </td>
          <td data-label="url">${formatByte(arr.size)}</td>
          <td data-label="speed"></td>
          <td data-label="operation">
            <button data-label="${arr.fs_id}">等待中</button>
<!--            <svg style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>-->
            <svg id="delete-item-${
              arr.fs_id
            }" class="delete-item" style="cursor: pointer; position: absolute; right: 5px" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
<!--            <svg style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>-->
          </td>
        </tr>
  `
  )

  document.querySelector(`button[data-label="${arr.fs_id}"]`).addEventListener('click', (e) => {
    const targetItem = InstanceForSystem.downloadingItems[arr.fs_id]

    // Stop progress
    if (targetItem) {
      if (confirm('停止后将需要重新下载， 确认吗？')) {
        targetItem.request.abort()
        clearInterval(targetItem.progressLoader)
        e.target.innerText = '重新下载'
        InstanceForSystem.stoppedItems[arr.fs_id] = arr
        delete InstanceForSystem.downloadingItems[arr.fs_id]
        addNextDownloadRequest()
      }
      return false
    }
    // Restart progress
    downloadItem(arr)
  })
  document.getElementById(`delete-item-${arr.fs_id}`).addEventListener('click', () => {
    if (confirm('确认删除？')) {
      arr.request && arr.request.abort()
      delete InstanceForSystem.allDownloads[arr.fs_id]
      delete InstanceForSystem.downloadingItems[arr.fs_id]
      delete InstanceForSystem.completedItems[arr.fs_id]
      delete InstanceForSystem.stoppedItems[arr.fs_id]
      document.getElementById('popup-tbody').removeChild(document.getElementById(`row-${arr.fs_id}`))
      addNextDownloadRequest()
    }
  })
}

function initStyle() {
  const newCSS = GM_getResourceText('customStyle')
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
                    <th scope="col">进度</th>
                    <th scope="col">大小</th>
                    <th scope="col">速度</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody id="popup-tbody"></tbody>
              </table>
                </div>
<!--                <span class="modal-close">×</a>-->
            </div>
        </div>
        <div id="container-floating">
          <div class="nd1 nds" data-toggle="tooltip" data-placement="left" onclick="alert('此功能正在开发中...')">
              <img class="reminder" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png">
          </div>
          <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create">
            <p class="plus">+</p>
            <img class="edit" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png">
          </div>
        </div>
    `
  )

  document.querySelectorAll('.modal-overlay,.modal-close').forEach((e) => e.addEventListener('click', closeModal))
  document.querySelector('#floating-button').addEventListener('click', openModal)
  // document.getElementById('copy-code').addEventListener('click', copyCode)
}
function startInstance() {
  const { selectedList, allDownloads, autoStart } = InstanceForSystem

  const requestList = []
  selectedList.forEach((arr) => {
    if (typeof allDownloads[arr.fs_id] === 'undefined') {
      allDownloads[arr.fs_id] = arr
      requestList.push(getDownloadUrl(arr))
    }
  })
  Promise.all(requestList).then((arrs) => {
    arrs.forEach((arr) => {
      if (autoStart) {
        downloadItem(arr)
      }
    })
  })
}
