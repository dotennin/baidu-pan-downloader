import TreeView from '../../components/TreeView'
import React from 'react'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import { PcManLoader } from '../../components/loaders'
import { useDispatch } from 'react-redux'
import interfaceModule from '../../modules/interfaceModule'

const childrenCounter = (accumulator: number, currentValue: React.ComponentProps<typeof TreeView>['tree']) => {
  if (!currentValue.children) {
    return accumulator
  }
  let count = accumulator + currentValue.children.length
  if (currentValue.children.length > 0) {
    count += currentValue.children.reduce(childrenCounter, 0)
  }
  return count
}

const ItemTree: React.FunctionComponent<{ itemLoaded: boolean }> = ({ itemLoaded }) => {
  const [...rest] = React.useState<string>('/')
  const dispatch = useDispatch()
  const setPath = rest[1]
  if (!itemLoaded) {
    InstanceForSystem.getCacheData('/').then((items) => {
      InstanceForSystem.itemRoot = items
      dispatch(interfaceModule.actions.change({ itemLoaded: true }))
    })
    return <PcManLoader />
  }
  return (
    <>
      {InstanceForSystem.itemRoot.map((item, index) => {
        const childrenLength = item.children?.reduce(childrenCounter, 0) as number
        return (
          <TreeView
            key={index}
            tree={item}
            childrenLength={childrenLength}
            toggleCollapses={({ open, node }) => {
              const newPath = node.path
              InstanceForSystem.getCacheData(newPath).then((children) => {
                node.children = children
                node.expanded = open
                setPath(newPath)
              })
            }}
          />
        )
      })}
    </>
  )
}

export default ItemTree
