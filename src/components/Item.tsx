import React from 'react'
import { StatusTypes } from '../types'
import { formatByte } from '../utils'
import { ItemProxy } from '../Item'

interface IProps {
  item: ItemProxy
}
function Item({ item }: IProps) {
  return (
    <tr id={'row-' + item.fsId}>
      <td data-label="filename">{item.serverFilename}</td>
      <td data-label="download">
        <div className="wrap">
          <div className={`progress-radial progress-${item.progress.status === StatusTypes.completed ? '100' : '0'}`}>
            <div data-label={'row-' + item.fsId} className="overlay">
              {item.progress.status === StatusTypes.completed ? '100' : '0'}%
            </div>
          </div>
        </div>
      </td>
      <td data-label="url">{formatByte(item.size)}</td>
      <td data-label="speed" />
      <td data-label="operation" />
    </tr>
  )
}

export { Item }
