import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { InstanceForSystem } from '../services/InstaceForSystem'
import { StatusTypes } from '../types'
import { IStoreState } from '../store'
import interfaceModule from '../modules/interfaceModule'
import downloadModule, { fetchItem } from '../modules/downloadModule'
import { downloadableSelector } from '../selectors'

const mapStoreToProps = (store: IStoreState) => ({
  autoStart: store.interface.autoStart,
  downloadable: downloadableSelector(store),
})

const FloatingButtons: React.FC<ReturnType<typeof mapStoreToProps>> = ({ autoStart, downloadable }) => {
  const dispatch = useDispatch()
  const { downloadItems } = useSelector((state: IStoreState) => state.download)
  return (
    <div id="container-floating">
      <div
        id="config-button"
        className="nd1 nds"
        data-toggle="tooltip"
        data-placement="left"
        onClick={() => {
          dispatch(interfaceModule.actions.change({ configModalOpen: true }))
        }}
      >
        <img
          alt={'bt_compose2_1x'}
          className="reminder"
          src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
        />
      </div>
      <div
        id="floating-button"
        data-toggle="tooltip"
        data-placement="left"
        data-original-title="Create"
        onClick={() => {
          const { selectedList } = InstanceForSystem

          const newItems = { ...downloadItems }
          const { allDownloads } = InstanceForSystem
          console.log(allDownloads)
          selectedList.forEach((item) => {
            if (typeof downloadItems[item.fsId] === 'undefined') {
              item.progress.status = StatusTypes.inQueued
              const { intervalId, percentCount, speedOverlay, status } = item.progress
              allDownloads[item.fsId] = item
              newItems[item.fsId] = { intervalId, percentCount, speedOverlay, status }

              if (downloadable && autoStart) {
                dispatch(fetchItem(item))
              }
            }
          })
          dispatch(downloadModule.actions.change({ downloadItems: newItems }))
          dispatch(interfaceModule.actions.change({ downloadModalOpen: true }))
        }}
      >
        <p className="plus">+</p>
        <img
          alt={'bt_compose2_1x'}
          className="edit"
          src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png"
        />
      </div>
    </div>
  )
}

export default connect(mapStoreToProps)(FloatingButtons)
