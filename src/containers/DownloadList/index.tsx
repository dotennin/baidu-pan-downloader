import React, { useState } from 'react'
import { Modal } from '../../components/Modal'
import { connect, useDispatch } from 'react-redux'
import { IStoreState } from '../../store'
import interfaceModule from '../../modules/interfaceModule'
import { Tabs } from '../../components/Tabs'
import AllDownloadTab from './AllDownloadTab'
import DownloadingTab from './DownloadingTab'
import StoppedTab from './StoppedTab'
import CompletedTab from './CompletedTab'

const mapStoreToProps = (store: IStoreState) => ({
  downloadModalOpen: store.interface.downloadModalOpen,
})

function DownloadList({ downloadModalOpen }: ReturnType<typeof mapStoreToProps>) {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <Modal
      open={downloadModalOpen}
      close={() => {
        dispatch(interfaceModule.actions.change({ downloadModalOpen: false }))
      }}
    >
      <Tabs
        activeTab={activeTab}
        key={'tabs'}
        onChange={(item, activeTab) => {
          setActiveTab(activeTab)
        }}
      >
        <AllDownloadTab name={'所有任务'} />
        <DownloadingTab name={'下载中'} />
        <StoppedTab name={'已停止'} />
        <CompletedTab name={'已完成'} />
      </Tabs>
    </Modal>
  )
}

export default connect(mapStoreToProps)(DownloadList)
