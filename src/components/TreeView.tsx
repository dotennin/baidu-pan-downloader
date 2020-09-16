import React from 'react'
import { Collapsible } from './Collapsible'
import { IStandardProps } from './types'
import { IItem } from '../services/types'

interface ITreeViewProps extends IItem {
  children?: ITreeViewProps[]
}

const TreeView: React.FC<{
  tree: ITreeViewProps
  childrenLength: number
  toggleCollapses?: (obj: { open: boolean; node: ITreeViewProps }) => void
} & IStandardProps> = ({ tree, toggleCollapses, ...rest }) => {
  console.log(tree)
  return (
    <Collapsible
      tabIndex={!tree.fs_id ? 0 : typeof tree.fs_id === 'number' ? tree.fs_id : parseInt(tree.fs_id)}
      title={tree.server_filename}
      variant={'arrowLeft'}
      nonIcon={tree.isdir === 0 && (!tree.children || tree.children.length === 0)}
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
            childrenLength={child.children?.length || 0}
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
const MemorizedTreeView = React.memo(TreeView, (prevProps, nextProps) => {
  // console.log('pre:', prevProps, prevProps.childrenLength)
  // console.log('next:', nextProps, nextProps.childrenLength)
  if (prevProps.childrenLength === nextProps.childrenLength) {
    return true
  }
  return false
})
export default MemorizedTreeView
