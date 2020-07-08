import React from 'react'
import { StatusTypes } from '../types'
import { addNextDownloadRequest } from '../services/api'
import { ItemProxy } from '../Item'
import { InstanceForSystem } from '../InstaceForSystem'

interface IProps {
  item: ItemProxy
}
function Operation({ item }: IProps) {
  const { allDownloads, downloadingItems, completedItems, stoppedItems } = InstanceForSystem
  const download = async () => {
    // downloadItem(item)
  }
  const stopItem = () => {
    const targetItem = InstanceForSystem.allDownloads[item.fsId]
    if (targetItem) {
      if (item.progress.status === StatusTypes.downloading) {
        if (!window.confirm('停止后将需要重新下载， 确认吗？')) {
          return false
        }
      }
      item.progress.status = StatusTypes.stopped
      targetItem.progress.request && targetItem.progress.request.abort && targetItem.progress.request.abort()
      clearInterval(targetItem.progress.intervalId!)
      stoppedItems[item.fsId] = item
      delete downloadingItems[item.fsId]

      // renderOperationElement(item)
      addNextDownloadRequest()
      return false
    }
  }
  const deleteItem = () => {
    item.progress.request && item.progress.request.abort && item.progress.request.abort()
    delete allDownloads[item.fsId]
    delete downloadingItems[item.fsId]
    delete completedItems[item.fsId]
    delete stoppedItems[item.fsId]

    // document
    //   .getElementById('popup-tbody')!
    //   .removeChild(document.getElementById(`row-${item.fs_id}`) as HTMLTableRowElement)
    addNextDownloadRequest()
  }
  return (
    <>
      <svg
        id={`start-item-${item.fsId}`}
        className={`${
          [StatusTypes.downloading, StatusTypes.inQueued].includes(item.progress.status) ? 'disabled' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        onClick={download}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" />
      </svg>
      <svg
        id={`stop-item-${item.fsId}`}
        className={`${
          [StatusTypes.downloading, StatusTypes.inQueued].includes(item.progress.status) ? '' : 'disabled'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        onClick={stopItem}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 6h12v12H6z" />
      </svg>
      <svg
        id={`delete-item-${item.fsId}`}
        className="delete-item"
        style={{ position: 'absolute', right: 5 }}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        onClick={deleteItem}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </>
  )
}

export default Operation
