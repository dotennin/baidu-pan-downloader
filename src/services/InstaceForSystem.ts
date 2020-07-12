import { IItem, StatusTypes, ValueTypes } from '../types'
import { GM } from '../gmInterface/gmInterface'
import { ItemProxy } from './Item'

type ItemObject = Record<ItemProxy['fsId'], ItemProxy>
const InstanceForSystem = {
  list: eval(`require('system-core:context/context.js')`).instanceForSystem.list,
  maxDownloadCount: 2,
  autoStart: true,
  allDownloads: {} as ItemObject,

  initState: function() {
    return new Promise((resolve) => {
      const objectFromValue: ItemObject = GM.getValue(ValueTypes.items, {})
      GM.deleteValue(ValueTypes.items)

      this.allDownloads = objectFromValue

      Object.values(objectFromValue).forEach((item) => {
        if (!this.autoStart && item.progress.status === StatusTypes.downloading) {
          // stop downloading item if user set autoStart as false
          item.progress.status = StatusTypes.stopped
        }
      })
      resolve(this)
    })
  },

  get selectedList() {
    const selected: IItem[] = this.list.getSelected()

    return selected
      .filter((arr) => {
        return arr.isdir !== 1
      })
      .map((arr) => ItemProxy.Create(arr))
  },

  get currentList() {
    return this.list.getCurrentList() as IItem[]
  },

  stopAll: function() {
    Object.values(this.allDownloads)
      .filter((item) => item.progress.status === StatusTypes.downloading)
      .forEach((item) => {
        item.progress.request && item.progress.request.abort && item.progress.request.abort()
      })
  },
}
InstanceForSystem.initState()

export { InstanceForSystem }
