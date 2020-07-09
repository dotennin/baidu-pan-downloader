import React from 'react'
import { formatByte } from '../../utils'
import { ItemProxy } from '../../services/Item'
import Operation from './Operation'
import ProgressStatus from './ProgressStatus'

interface IProps {
  item: ItemProxy
}
function Item({ item }: IProps) {
  return (
    <tr id={'row-' + item.fsId}>
      <td data-label="filename">{item.serverFilename}</td>
      <td data-label="download">
        <div className="wrap">
          <ProgressStatus fsId={item.fsId} />
        </div>
      </td>
      <td data-label="url">{formatByte(item.size)}</td>
      <td data-label="speed" />
      <td data-label="operation">
        <Operation fsId={item.fsId} />
      </td>
    </tr>
  )
}
export { Item }
