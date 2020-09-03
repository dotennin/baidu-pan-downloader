import React from 'react'
import { StatusTypes } from '../../services/types'
import { ItemProxy } from '../../services/ItemProxy'
import { IStoreState } from '../../store'
import { connect, useDispatch } from 'react-redux'
import downloadModule, { addNextDownloadRequest, fetchItem } from '../../modules/downloadModule'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import { getLocation } from '../../utils'
import { ActionButton } from '../../components/ActionButton'

interface IProps {
  fsId: ItemProxy['fsId']
}
const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  status: store.download.downloadItems[props.fsId]?.status,
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
      targetItem.progress.request?.abort && targetItem.progress.request?.abort()
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
    <div
      css={`
        display: flex;
        justify-content: center;
      `}
    >
      {getLocation().inDiskScreen && (
        <>
          <ActionButton
            icon={'play_arrow'}
            onClick={() => dispatch(fetchItem(targetItem))}
            className={`${
              [StatusTypes.downloading, StatusTypes.inQueued].includes(status) || targetItem.isDir ? 'disabled' : ''
            }`}
          />
          <ActionButton
            icon={'stop'}
            onClick={stopItem}
            className={`${
              [StatusTypes.downloading, StatusTypes.inQueued].includes(status) && !targetItem.isDir ? '' : 'disabled'
            }`}
          />
        </>
      )}
      <ActionButton
        icon={'clear'}
        css={`
          opacity: 0;
          cursor: unset !important;
        `}
      />
      <ActionButton icon={'clear'} onClick={deleteItem} />
    </div>
  )
}

export default connect(mapStoreToProps)(React.memo(Operation))
