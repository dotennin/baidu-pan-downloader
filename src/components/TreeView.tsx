import React from 'react'
import { Collapsible } from './Collapsible'
import { IStandardProps } from './types'

interface ITreeViewProps {
  id: string
  name: string
  children?: ITreeViewProps[]
}

const TreeView: React.FC<{
  tree: ITreeViewProps
  toggleCollapses?: (obj: { open: boolean; node: ITreeViewProps }) => void
} & IStandardProps> = ({ tree, toggleCollapses, ...rest }) => {
  return (
    <Collapsible
      tabIndex={parseInt(tree.id)}
      title={tree.name}
      variant={'arrowLeft'}
      nonIcon={!tree.children || tree.children.length === 0}
      toggleCollapses={(open) => {
        typeof toggleCollapses === 'function' && toggleCollapses({ open, node: tree })
      }}
      {...rest}
    >
      {tree.children?.map((child, key) => {
        return (
          <TreeView
            key={key}
            tree={child}
            toggleCollapses={toggleCollapses}
            css={`
              box-sizing: border-box;
              padding-left: 24px;
            `}
          />
        )
      })}
    </Collapsible>
  )
}
export default TreeView
