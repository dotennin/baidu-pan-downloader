import React from 'react'
import { connect } from 'react-redux'
import { IStoreState } from '../../store'
import { ItemProxy } from '../../services/ItemProxy'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import { StatusTypes } from '../../services/types'

interface IProps {
  fsId: ItemProxy['fsId']
}
const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  speedOverlay: store.download.downloadItems[props.fsId]?.speedOverlay,
  status: store.download.downloadItems[props.fsId]?.status,
})
function SpeedStatus({ speedOverlay, status }: ReturnType<typeof mapStoreToProps & IProps>) {
  if (status && status !== StatusTypes.downloading) {
    return null
  }
  return <>{InstanceForSystem.friendlyFileSize(speedOverlay)} /s</>
}

export default connect(mapStoreToProps)(React.memo(SpeedStatus))
