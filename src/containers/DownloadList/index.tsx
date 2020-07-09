import React from 'react'
import { Item } from './Item'
import { Modal } from '../../components/Modal'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { interfaceActionCreator } from '../../store/Interface'
import { IStoreState } from '../../store'

const mapStoreToProps = (store: IStoreState) => ({
  allDownloads: store.download.allDownloads,
  downloadModalOpen: store.interface.downloadModalOpen,
  autoStart: store.interface.autoStart,
  downloadable: store.interface.downloadable,
})

const mapActionsToProps = (dispatch: Dispatch) => ({
  closeModal: () => {
    dispatch(interfaceActionCreator.change({ downloadModalOpen: false }))
  },
})

function DownloadList({
  allDownloads,
  downloadModalOpen,
  closeModal,
}: ReturnType<typeof mapStoreToProps> & ReturnType<typeof mapActionsToProps>) {
  return (
    <Modal open={downloadModalOpen} close={closeModal}>
      <table>
        <thead>
          <tr>
            <th scope="col">文件</th>
            <th scope="col">进度</th>
            <th scope="col">大小</th>
            <th scope="col">速度</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody id="popup-tbody">
          {Object.values(allDownloads).map((item, key) => {
            return <Item key={key} item={item} />
          })}
        </tbody>
      </table>
    </Modal>
  )
}

export default connect(mapStoreToProps, mapActionsToProps)(DownloadList)
