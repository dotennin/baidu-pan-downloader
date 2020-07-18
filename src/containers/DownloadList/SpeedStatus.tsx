import React from 'react'
import { connect } from 'react-redux'
import { IStoreState } from '../../store'
import { ItemProxy } from '../../services/ItemProxy'
import { InstanceForSystem } from '../../services/InstaceForSystem'

interface IProps {
  fsId: ItemProxy['fsId']
}
const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  speedOverlay: store.download.downloadItems[props.fsId]?.speedOverlay,
})
function SpeedStatus({ speedOverlay }: ReturnType<typeof mapStoreToProps & IProps>) {
  return <>{InstanceForSystem.friendlyFileSize(speedOverlay)} /s</>
}

export default connect(mapStoreToProps)(SpeedStatus)
