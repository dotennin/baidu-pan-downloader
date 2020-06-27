/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-use-before-define */
import { IItem, StatusTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { InstanceForSystem } from './InstaceForSystem'
import { formatByte } from './utils'
import { renderOperationElement } from '.'

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

export async function downloadItem(arr: IItem) {
  // Remove Item if target still in stop cluster
  if (InstanceForSystem.stoppedItems[arr.fs_id]) {
    delete InstanceForSystem.stoppedItems[arr.fs_id]
  }

  if (!InstanceForSystem.downloadable) {
    arr.status = StatusTypes.inQueued
    renderOperationElement(arr)
    return
  }

  if (arr.status === StatusTypes.error) {
    // re-getting url if it invalided
    await getDownloadUrl(arr)
  }

  arr.status = StatusTypes.downloading

  InstanceForSystem.downloadingItems[arr.fs_id] = arr
  const { url, server_filename } = arr
  let loaded = 0
  let currentEvent: ProgressEvent | undefined = undefined
  const percentOverlay = document.querySelector(`div[data-label="${arr.fs_id}"]`) as HTMLDivElement
  const progressRadial = percentOverlay.parentElement as HTMLDivElement
  const speedOverlay = percentOverlay.closest('tr')!.querySelector('td[data-label="speed"]') as HTMLTableDataCellElement

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
      arr.progress_loader_id && clearInterval(arr.progress_loader_id)
      progressRadial.className = 'progress-radial progress-100'
      percentOverlay.innerText = '100%'
      speedOverlay.innerText = ''
      InstanceForSystem.completedItems[arr.fs_id] = arr
      delete InstanceForSystem.downloadingItems[arr.fs_id]

      GM.notification({
        text: '下载完成',
        title: server_filename,
        highlight: true,
      })
      arr.status = StatusTypes.completed
      renderOperationElement(arr)

      addNextDownloadRequest()
    },
    onerror: () => {
      arr.progress_loader_id && clearInterval(arr.progress_loader_id)
      progressRadial.className = 'progress-radial progress-0'
      percentOverlay.innerHTML = `<span style="color: red">error</span>`
      speedOverlay.innerText = ''
      InstanceForSystem.stoppedItems[arr.fs_id] = arr
      delete InstanceForSystem.downloadingItems[arr.fs_id]
      arr.status = StatusTypes.error
      renderOperationElement(arr)

      addNextDownloadRequest()
    },
  })
  window.requestAnimationFrame(() => {
    renderOperationElement(arr)
  })

  arr.progress_loader_id = window.setInterval(() => {
    if (currentEvent) {
      const speed = currentEvent.loaded - loaded
      loaded = currentEvent.loaded
      speedOverlay.innerText = `${formatByte(speed)}/s`
    }
  }, 1000)
}

export function addNextDownloadRequest() {
  for (const fs_id in InstanceForSystem.itemsFromQueue) {
    downloadItem(InstanceForSystem.allDownloads[fs_id])
  }
}
