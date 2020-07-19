import React from 'react'
import { Tab } from './Tabs'

const TabTableHeader: React.FC<{ name: string }> = ({ children, name, ...rest }) => {
  return (
    <Tab
      name={name}
      css={`
        max-height: calc(60vh - 58px);
        overflow: auto;
      `}
      {...rest}
    >
      <table>
        <thead>
          <tr>
            <th scope="col">文件</th>
            <th scope="col">进度</th>
            <th scope="col">大小</th>
            <th scope="col">速度</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Tab>
  )
}
export default TabTableHeader
