import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { IStoreState } from '../store'
import interfaceModule from '../modules/interfaceModule'
import { Modal } from '../components/Modal'

const mapStoreToProps = (store: IStoreState) => ({
  open: store.interface.naifeiPortalOpen,
  shareLinks: store.interface.shareLinks,
})
function NaifeiPortal({ open, shareLinks }: ReturnType<typeof mapStoreToProps>) {
  const dispatch = useDispatch()
  if (!open) {
    return null
  }
  return (
    <Modal
      open={true}
      noOverlayColor={true}
      close={() => dispatch(interfaceModule.actions.change({ naifeiPortalOpen: false }))}
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
            {shareLinks.map((shareLink, index) => {
              return (
                <tr key={index}>
                  <td data-label="filename" style={{ wordBreak: 'break-all' }}>
                    {shareLink.server_filename}
                  </td>
                  <td>{shareLink.size}</td>
                  <td>
                    <div dangerouslySetInnerHTML={{ __html: shareLink.dlink }} />
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

export default connect(mapStoreToProps)(NaifeiPortal)
