/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-use-before-define */
import { IItem, valueTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { InstanceForSystem } from './InstaceForSystem'
import { formatByte } from './utils'

export function getDownloadUrl(arr: IItem): Promise<IItem> {
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
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

          return resolve(arr)
        } else {
          // Todo return error message
          return reject(r)
        }
      },
    })
  })
}

export function downloadItem(arr: IItem) {
  // Remove Item if target still in stop cluster
  if (InstanceForSystem.stoppedItems[arr.fs_id]) {
    delete InstanceForSystem.stoppedItems[arr.fs_id]
  }

  const operationButton = document.querySelector(`button[data-label="${arr.fs_id}"]`) as HTMLButtonElement
  if (!InstanceForSystem.downloadable) {
    operationButton.innerText = '等待中'
    return
  }

  arr.status = valueTypes.downloadingItems

  InstanceForSystem.downloadingItems[arr.fs_id] = arr
  const { url, server_filename } = arr
  let loaded = 0
  let currentEvent: ProgressEvent | undefined = undefined
  const percentOverlay = document.querySelector(`div[data-label="${arr.fs_id}"]`) as HTMLDivElement
  const progressRadial = percentOverlay.parentElement as HTMLDivElement
  const speedOverlay = percentOverlay.closest('tr')!.querySelector('td[data-label="speed"]') as HTMLTableDataCellElement
  operationButton.innerText = '停止'

  arr.request = GM.download({
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

      GM.notification({
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

export function addNextDownloadRequest() {
  for (const fs_id in InstanceForSystem.itemsFromQueue) {
    downloadItem(InstanceForSystem.allDownloads[fs_id])
  }
}
