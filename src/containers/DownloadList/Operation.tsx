import React from 'react'
import { StatusTypes } from '../../types'
import { ItemProxy } from '../../services/Item'
import { IStoreState, store } from '../../store'
import { connect } from 'react-redux'
import { downloadActionCreator } from '../../store/download'

interface IProps {
  fsId: ItemProxy['fsId']
}
const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  status: store.download.allDownloads[props.fsId]?.progress.status,
  request: store.download.allDownloads[props.fsId]?.progress.request,
})

const mapActionsToProps = {
  download: downloadActionCreator.downloadURL.request,
  updateDownloadList: downloadActionCreator.change.request,
}
function Operation({
  fsId,
  status,
  request,
  download,
  updateDownloadList,
}: typeof mapActionsToProps & ReturnType<typeof mapStoreToProps> & IProps) {
  const stopItem = () => {
    const {
      download: { allDownloads },
    } = store.getState()
    const targetItem = allDownloads[fsId]

    if (targetItem) {
      if (status === StatusTypes.downloading) {
        if (!window.confirm('停止后将需要重新下载， 确认吗？')) {
          return false
        }
      }
      targetItem.progress.status = StatusTypes.stopped
      targetItem.progress.request?.abort && targetItem.progress.request.abort()
      clearInterval(targetItem.progress.intervalId!)

      // addNextDownloadRequest()
      return false
    }
  }
  const deleteItem = () => {
    request?.abort && request.abort()
    const {
      download: { allDownloads },
    } = store.getState()
    delete allDownloads[fsId]
    updateDownloadList(allDownloads)

    // addNextDownloadRequest()
  }
  return (
    <>
      <svg
        id={`start-item-${fsId}`}
        className={`${[StatusTypes.downloading, StatusTypes.inQueued].includes(status) ? 'disabled' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        onClick={() => {
          const {
            download: { allDownloads },
          } = store.getState()
          download(allDownloads[fsId])
        }}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" />
      </svg>
      <svg
        id={`stop-item-${fsId}`}
        className={`${[StatusTypes.downloading, StatusTypes.inQueued].includes(status) ? '' : 'disabled'}`}
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
        id={`delete-item-${fsId}`}
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

export default connect(mapStoreToProps, mapActionsToProps)(Operation)
