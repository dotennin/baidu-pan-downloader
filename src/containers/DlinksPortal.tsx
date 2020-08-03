import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { IStoreState } from '../store'
import interfaceModule from '../modules/interfaceModule'
import { Modal } from '../components/Modal'
import { InstanceForSystem } from '../services/InstaceForSystem'

const mapStoreToProps = (store: IStoreState) => ({
  open: store.interface.linkPortalOpen,
  dlinks: store.link.response?.dlink,
})
function DlinksPortal({ open, dlinks }: ReturnType<typeof mapStoreToProps>) {
  const dispatch = useDispatch()
  if (!open) {
    return null
  }
  return (
    <Modal
      open={true}
      noOverlayColor={true}
      close={() => dispatch(interfaceModule.actions.change({ linkPortalOpen: false }))}
    >
      <div
        css={`
          height: 60vh;
          overflow: hidden;
        `}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">文件</th>
              <th scope="col">大小</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            {dlinks?.map((link, index) => {
              const item = InstanceForSystem.allDownloads[link.fs_id]
              return (
                <tr key={index}>
                  <td>{item.serverFilename}</td>
                  <td>{InstanceForSystem.friendlyFileSize(item.size)}</td>
                  <td>
                    <a href={link.link}>点击下载</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default connect(mapStoreToProps)(DlinksPortal)
