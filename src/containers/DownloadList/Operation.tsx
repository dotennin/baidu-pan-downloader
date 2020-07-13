import React from 'react'
import { StatusTypes } from '../../services/types'
import { ItemProxy } from '../../services/ItemProxy'
import { IStoreState } from '../../store'
import { connect, useDispatch } from 'react-redux'
import downloadModule, { addNextDownloadRequest, fetchItem } from '../../modules/downloadModule'
import { InstanceForSystem } from '../../services/InstaceForSystem'

interface IProps {
  fsId: ItemProxy['fsId']
}
const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  status: store.download.downloadItems[props.fsId]!.status,
})

function Operation({ fsId, status }: ReturnType<typeof mapStoreToProps> & IProps) {
  const targetItem = InstanceForSystem.allDownloads[fsId]
  const dispatch = useDispatch()
  const stopItem = () => {
    if (targetItem) {
      if (status === StatusTypes.downloading) {
        if (!window.confirm('停止后将需要重新下载， 确认吗？')) {
          return false
        }
        dispatch(downloadModule.actions.failureDownload())
      }
      targetItem.progress.status = StatusTypes.stopped
      targetItem.progress.request!.abort && targetItem.progress.request!.abort()
      clearInterval(targetItem.progress.intervalId)

      dispatch(addNextDownloadRequest())
      return false
    }
  }
  const deleteItem = () => {
    if (targetItem) {
      targetItem.progress.request?.abort && targetItem.progress.request.abort()
      clearInterval(targetItem.progress.intervalId)
      if (targetItem.progress.status === StatusTypes.downloading) {
        dispatch(downloadModule.actions.failureDownload())
      }
      delete InstanceForSystem.allDownloads[fsId]

      // Todo this operation will occur Type error on development mode
      dispatch(downloadModule.actions.removeItem({ fsId }))
    }

    dispatch(addNextDownloadRequest())
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
          dispatch(fetchItem(targetItem))
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
        style={{ position: 'relative', right: -20 }}
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

export default connect(mapStoreToProps)(Operation)
