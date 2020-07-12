import React from 'react'
import { connect } from 'react-redux'
import { IStoreState } from '../../store'
import { ItemProxy } from '../../services/Item'
import { formatByte } from '../../utils'

interface IProps {
  fsId: ItemProxy['fsId']
}
const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  speedOverlay: store.download.downloadItems[props.fsId]!.speedOverlay,
})
function SpeedStatus({ speedOverlay }: ReturnType<typeof mapStoreToProps & IProps>) {
  return <>{formatByte(speedOverlay)} /s</>
}

export default connect(mapStoreToProps)(SpeedStatus)
