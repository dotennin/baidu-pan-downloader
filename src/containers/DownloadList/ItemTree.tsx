import TreeView from '../../components/TreeView'
import React from 'react'
import { InstanceForSystem } from '../../services/InstaceForSystem'

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
const ItemTree: React.FunctionComponent = () => {
  const [...rest] = React.useState<string>('/')
  const setPath = rest[1]
  return (
    <>
      {InstanceForSystem.itemRoot.map((item, index) => {
        const childrenLength = item.children?.reduce(childrenCounter, 0) as number
        return (
          <TreeView
            key={index}
            tree={item}
            childrenLength={childrenLength}
            toggleCollapses={({ node }) => {
              const newPath = node.path
              InstanceForSystem.getCacheData(newPath).then((children) => {
                node.children = children
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
