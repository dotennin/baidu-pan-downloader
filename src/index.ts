/* eslint-disable @typescript-eslint/no-use-before-define */
import { InstanceForSystem } from './InstaceForSystem'
import { IItem } from './types'
import { GM } from './gmInterface/gmInterface'

window.onunload = () => {
  GM.setValue('downloadingItems', InstanceForSystem.downloadingItems)
  GM.setValue('stoppedItems', InstanceForSystem.stoppedItems)
  GM.setValue('completedItems', InstanceForSystem.completedItems)

  InstanceForSystem.stopAll()
}

// @ts-ignore
!(function() {
  initStyle()
  startInstance()

  document.getElementById('floating-button')!.addEventListener('click', () => {
    openModal()
    startInstance()
  })
})()

function addNextDownloadRequest() {
  for (const fs_id in InstanceForSystem.itemsFromQueue) {
    downloadItem(InstanceForSystem.allDownloads[fs_id])
  }
}

function downloadItem(arr: IItem) {
  // Remove Item if target still in stop cluster
  if (InstanceForSystem.stoppedItems[arr.fs_id]) {
    delete InstanceForSystem.stoppedItems[arr.fs_id]
  }

  const operationButton = document.querySelector(`button[data-label="${arr.fs_id}"]`) as HTMLButtonElement
  if (!InstanceForSystem.downloadable) {
    operationButton.innerText = '等待中'
    return
  }

  InstanceForSystem.downloadingItems[arr.fs_id] = arr
  const { url, server_filename } = arr
  let loaded = 0
  let currentEvent: ProgressEvent | undefined = undefined
  const percentOverlay = document.querySelector(`div[data-label="${arr.fs_id}"]`) as HTMLDivElement
  const progressRadial = percentOverlay.parentElement as HTMLDivElement
  const speedOverlay = percentOverlay.closest('tr')!.querySelector('td[data-label="speed"]') as HTMLTableDataCellElement
  operationButton.innerText = '停止'

  // @ts-ignore
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
    onprogress: (e: ProgressEvent) => {
      currentEvent = e

      const percent = Math.round((currentEvent.loaded * 100) / currentEvent.total)
      progressRadial.className = `progress-radial progress-${percent}`
      percentOverlay.innerText = `${percent}%`
    },
    onload: () => {
      arr.progressLoader && clearInterval(arr.progressLoader)
      progressRadial.className = 'progress-radial progress-100'
      percentOverlay.innerText = '100%'
      speedOverlay.innerText = ''
      operationButton.innerText = '重新下载'
      InstanceForSystem.completedItems[arr.fs_id] = arr
      delete InstanceForSystem.downloadingItems[arr.fs_id]

      // @ts-ignore
      GM_notification({
        text: '下载完成',
        title: server_filename,
        highlight: true,
      })

      addNextDownloadRequest()
    },
    onerror: () => {
      arr.progressLoader && clearInterval(arr.progressLoader)
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
function formatByte(byte: number) {
  const KiByte = Math.round(byte / 1024)
  return KiByte <= 1000 ? `${KiByte} KiB` : `${Math.round(KiByte / 10.24) / 100} MiB`
}
function getDownloadUrl(arr: IItem): Promise<IItem> {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    GM_xmlhttpRequest({
      url:
        'http://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&ver=2.0&method=locatedownload&path=' +
        encodeURIComponent(arr.path),
      method: 'GET',
      responseType: 'json',
      headers: {
        'User-Agent': 'netdisk;P2SP;2.2.60.26',
      },
      onload: (r: XMLHttpRequest) => {
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
  const modalWrapper = document.querySelector('.modal-wrapper') as HTMLDivElement
  modalWrapper.className = modalWrapper.className + ' open'
}

function closeModal() {
  const modalWrapper = document.querySelector('.modal-wrapper') as HTMLDivElement
  modalWrapper.className = 'modal-wrapper'
}

function appendRow(arr: IItem) {
  document.getElementById('popup-tbody')!.insertAdjacentHTML(
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
            <svg id="delete-item-${arr.fs_id}"
                class="delete-item"
                style="cursor: pointer; position: absolute; right: 5px"
                xmlns="http://www.w3.org/2000/svg"
                height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </td>
        </tr>
  `
  )

  document.querySelector(`button[data-label="${arr.fs_id}"]`)!.addEventListener('click', (e) => {
    const targetItem = InstanceForSystem.downloadingItems[arr.fs_id]

    // Stop progress
    if (targetItem) {
      if (confirm('停止后将需要重新下载， 确认吗？')) {
        targetItem.request!.abort()
        clearInterval(targetItem.progressLoader!)
        const target = e.target as HTMLButtonElement
        target.innerText = '重新下载'
        InstanceForSystem.stoppedItems[arr.fs_id] = arr
        delete InstanceForSystem.downloadingItems[arr.fs_id]
        addNextDownloadRequest()
      }
      return false
    }
    // Restart progress
    downloadItem(arr)
  })
  document.getElementById(`delete-item-${arr.fs_id}`)!.addEventListener('click', () => {
    if (confirm('确认删除？')) {
      arr.request && arr.request.abort()
      delete InstanceForSystem.allDownloads[arr.fs_id]
      delete InstanceForSystem.downloadingItems[arr.fs_id]
      delete InstanceForSystem.completedItems[arr.fs_id]
      delete InstanceForSystem.stoppedItems[arr.fs_id]
      document
        .getElementById('popup-tbody')!
        .removeChild(document.getElementById(`row-${arr.fs_id}`) as HTMLTableRowElement)
      addNextDownloadRequest()
    }
  })
}

function initStyle() {
  // @ts-ignore
  const newCSS = GM_getResourceText('customStyle')
  // @ts-ignore
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
  document.querySelector('#floating-button')!.addEventListener('click', openModal)
  // document.getElementById('copy-code').addEventListener('click', copyCode)
}
function startInstance() {
  const { selectedList, allDownloads, autoStart } = InstanceForSystem

  const requestList: Promise<IItem>[] = []
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
