import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { IStoreState } from '../store'
import interfaceModule from '../modules/interfaceModule'
import { Modal } from '../components/Modal'

const mapStoreToProps = (store: IStoreState) => ({
  open: store.interface.shareLinksPortalOpen,
  response: store.link.shareLink.response,
})
function ShareLinksPortal({ open, response }: ReturnType<typeof mapStoreToProps>) {
  const dispatch = useDispatch()
  if (!open) {
    return null
  }
  return (
    <Modal
      open={true}
      noOverlayColor={true}
      close={() => dispatch(interfaceModule.actions.change({ shareLinksPortalOpen: false }))}
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
            {response?.map((shareLink, index) => {
              return (
                <tr key={index}>
                  <td data-label="filename" style={{ wordBreak: 'break-all' }}>
                    {shareLink.name}
                  </td>
                  <td>{shareLink.size}</td>
                  <td>
                    <a href={shareLink.link}>点击下载</a>
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

export default connect(mapStoreToProps)(ShareLinksPortal)
