import React from 'react'
import { formatByte } from '../../utils'
import { ItemProxy } from '../../services/Item'
import Operation from './Operation'
import ProgressStatus from './ProgressStatus'
import SpeedStatus from './SpeedStatus'
import { InstanceForSystem } from '../../services/InstaceForSystem'

interface IProps {
  fsId: ItemProxy['fsId']
}

function Item({ fsId }: IProps) {
  const item = InstanceForSystem.allDownloads[fsId]
  if (!item) {
    return null
  }
  const { serverFilename, size } = InstanceForSystem.allDownloads[fsId]
  return (
    <tr id={'row-' + fsId}>
      <td data-label="filename" style={{ wordBreak: 'break-all' }}>
        {serverFilename}
      </td>
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
export default Item
