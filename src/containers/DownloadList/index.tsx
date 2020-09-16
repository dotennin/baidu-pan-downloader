import React, { useState } from 'react'
import { Modal } from '../../components/Modal'
import { connect, useDispatch } from 'react-redux'
import { IStoreState } from '../../store'
import interfaceModule from '../../modules/interfaceModule'
import { Tabs } from '../../components/Tabs'
import DownloadTab from './DownloadTab'
import { GridCol, GridRow } from '../../components/Layout'
import ItemTree from './ItemTree'
import { createSelector } from '@reduxjs/toolkit'
import { StatusTypes } from '../../services/types'

const mapStoreToProps = (store: IStoreState) => ({
  downloadModalOpen: store.interface.downloadModalOpen,
  itemLoaded: store.interface.itemLoaded,
  fsIdList: createSelector(
    (store: IStoreState) => store.download.downloadItems,
    (allDownloads) => Object.keys(allDownloads)
  )(store),
  downloadingList: createSelector(
    (store: IStoreState) => store.download.downloadItems,
    (allDownloads) =>
      Object.keys(allDownloads)
        .sort((a) => (allDownloads[a].status === StatusTypes.downloading ? -1 : 1))
        .filter((fsId) => [StatusTypes.downloading, StatusTypes.inQueued].includes(allDownloads[fsId].status))
  )(store),
  stoppedList: createSelector(
    (store: IStoreState) => store.download.downloadItems,
    (allDownloads) => Object.keys(allDownloads).filter((fsId) => allDownloads[fsId].status === StatusTypes.stopped)
  )(store),
  completedList: createSelector(
    (store: IStoreState) => store.download.downloadItems,
    (allDownloads) => Object.keys(allDownloads).filter((fsId) => allDownloads[fsId].status === StatusTypes.completed)
  )(store),
})

function DownloadList({
  downloadModalOpen,
  fsIdList,
  completedList,
  downloadingList,
  stoppedList,
  itemLoaded,
}: ReturnType<typeof mapStoreToProps>) {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(0)
  if (!downloadModalOpen) {
    return null
  }
  return (
    <Modal
      open={downloadModalOpen}
      css={`
        min-height: 30vh;
      `}
      close={() => {
        dispatch(interfaceModule.actions.change({ downloadModalOpen: false }))
      }}
    >
      <GridRow>
        <GridCol
          valign={'top'}
          sizeL={3}
          direction={'row'}
          css={`
            overflow-y: auto;
            max-height: ${itemLoaded ? '60vh' : '200px'};;
            //height: calc(100% - 40vh);
            // height: ${itemLoaded ? '500px' : 'auto'};
            transition: max-height 0.5s;
          `}
        >
          <ItemTree itemLoaded={itemLoaded} />
        </GridCol>
        <GridCol valign={'top'} sizeL={9}>
          <Tabs
            activeTab={activeTab}
            key={'tabs'}
            css={`
              height: 100%;
              border-radius: unset;
            `}
            onChange={(item, activeTab) => {
              setActiveTab(activeTab)
            }}
          >
            <DownloadTab name={'所有任务'} fsIdList={fsIdList} />
            <DownloadTab name={'下载中'} fsIdList={downloadingList} />
            <DownloadTab name={'已停止'} fsIdList={stoppedList} />
            <DownloadTab name={'已完成'} fsIdList={completedList} />
          </Tabs>
        </GridCol>
      </GridRow>
    </Modal>
  )
}

export default connect(mapStoreToProps)(DownloadList)
