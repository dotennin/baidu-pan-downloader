import React from 'react'
import { StatusTypes, ValueTypes } from '../../services/types'
import { ItemProxy } from '../../services/ItemProxy'
import { IStoreState } from '../../store'
import { connect, useDispatch } from 'react-redux'
import downloadModule, { addNextDownloadRequest, fetchItem } from '../../modules/downloadModule'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import { Icon } from '../../components/Icon'
import interfaceModule from '../../modules/interfaceModule'
import { createPrivateShareLink } from '../../services/api'
import { getLocation } from '../../utils'

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

  const openNaifeiModal = async () => {
    try {
      const { ui, user } = InstanceForSystem
      if (getLocation().inShareScreen) {
        if (!user.self) {
          const sharePwd = window.localStorage.getItem(ValueTypes.sharePassword) as string
          ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
          const shareLink = `链接：${encodeURI(
            window.location.href.replace(window.location.hash, '')
          )}提取码：${sharePwd}`
          dispatch(interfaceModule.actions.change({ naifeiPortalOpen: true, shareLink }))
          return
        }
      }
      InstanceForSystem.dialog.confirm({
        title: 'Naifei直链生成接确认',
        body:
          '将会把所选数据将生成<span style="color: red">共享链接</span> ， 并传输到Naifei服务器。 <br /> 是否确认？',
        onSure: async () => {
          ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
          const res = await createPrivateShareLink(targetItem.fsId)
          const shareLink = `share=${res.shorturl.replace(/.+s\//, '')}&pwd=qqqq`
          dispatch(interfaceModule.actions.change({ naifeiPortalOpen: true, shareLink }))
        },
      })
    } catch (e) {
      throw new Error('生成共享链接失败')
    }
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
          <Icon
            name={'play_arrow'}
            onClick={() => dispatch(fetchItem(targetItem))}
            className={`${
              [StatusTypes.downloading, StatusTypes.inQueued].includes(status) || targetItem.isDir ? 'disabled' : ''
            }`}
          />
          <Icon
            name={'stop'}
            onClick={stopItem}
            className={`${
              [StatusTypes.downloading, StatusTypes.inQueued].includes(status) && !targetItem.isDir ? '' : 'disabled'
            }`}
          />
        </>
      )}
      <Icon name={'open_in_new'} onClick={openNaifeiModal} />
      <Icon
        name={'clear'}
        css={`
          opacity: 0;
          cursor: unset !important;
        `}
      />
      <Icon name={'clear'} onClick={deleteItem} />
    </div>
  )
}

export default connect(mapStoreToProps)(Operation)
