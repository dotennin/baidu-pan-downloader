import React from 'react'
import { formatByte } from '../../utils'
import { ItemProxy } from '../../services/Item'
import Operation from './Operation'
import ProgressStatus from './ProgressStatus'
import SpeedStatus from './SpeedStatus'
import { IStoreState } from '../../store'
import { connect } from 'react-redux'

interface IProps {
  fsId: ItemProxy['fsId']
}

const mapStoreToProps = (store: IStoreState, props: IProps) => ({
  serverFilename: store.download.allDownloads[props.fsId]?.serverFilename,
  size: store.download.allDownloads[props.fsId]?.size,
})
function Item({ fsId, serverFilename, size }: IProps & ReturnType<typeof mapStoreToProps>) {
  return (
    <tr id={'row-' + fsId}>
      <td data-label="filename">{serverFilename}</td>
      <td data-label="download">
        <div className="wrap">
          <ProgressStatus fsId={fsId} />
        </div>
      </td>
      <td data-label="url">{formatByte(size)}</td>
      <td data-label="speed">
        <SpeedStatus fsId={fsId} />
      </td>
      <td data-label="operation">
        <Operation fsId={fsId} />
      </td>
    </tr>
  )
}
export default connect(mapStoreToProps)(Item)
