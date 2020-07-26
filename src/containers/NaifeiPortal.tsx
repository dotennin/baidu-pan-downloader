import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { IStoreState } from '../store'
import interfaceModule from '../modules/interfaceModule'
import { Modal } from '../components/Modal'
import { InstanceForSystem } from '../services/InstaceForSystem'

const mapStoreToProps = (store: IStoreState) => ({
  open: store.interface.naifeiPortalOpen,
  shareLink: store.interface.shareLink,
})
function NaifeiPortal({ open, shareLink }: ReturnType<typeof mapStoreToProps>) {
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
        <iframe
          src={`https://pan.naifei.cc/?${encodeURI(shareLink)}`}
          width={'100%'}
          height={'100%'}
          onLoad={() => InstanceForSystem.ui.hideTip()}
        />
      </div>
    </Modal>
  )
}

export default connect(mapStoreToProps)(NaifeiPortal)
