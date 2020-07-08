import { IItem, StatusTypes, ValueTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { ItemProxy } from './Item'

type ItemObject = Record<ItemProxy['fsId'], ItemProxy>
const InstanceForSystem = {
  list: eval(`require('system-core:context/context.js')`).instanceForSystem.list,
  maxDownloadCount: 2,
  autoStart: true,
  downloadingItems: {} as ItemObject,
  stoppedItems: {} as ItemObject,
  completedItems: {} as ItemObject,
  allDownloads: {} as ItemObject,

  initState: function() {
    const objectFromValue: ItemObject = GM.getValue(ValueTypes.items, {})
    GM.deleteValue(ValueTypes.items)

    this.allDownloads = objectFromValue

    Object.values(objectFromValue).forEach((item) => {
      if (!this.autoStart && item.progress.status === StatusTypes.downloading) {
        // stop downloading item if user set autoStart as false
        item.progress.status = StatusTypes.stopped
      }
      if (item.progress.status === StatusTypes.completed) {
        this.completedItems[item.fsId] = item
      }
      if (item.progress.status === StatusTypes.stopped) {
        this.stoppedItems[item.fsId] = item
      }
    })

    return this
  },

  get selectedList() {
    const selected: IItem[] = this.list.getSelected()

    return selected
      .filter((arr) => {
        return arr.isdir !== 1
      })
      .map((arr) => ItemProxy.Create(arr))
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get itemsFromQueue() {
    const queue: ItemObject = {}
    const filterKeys = Object.keys(Object.assign({}, this.downloadingItems, this.completedItems, this.stoppedItems))

    Object.keys(this.allDownloads).forEach((fsId) => {
      if (!filterKeys.includes(fsId)) {
        queue[fsId] = this.allDownloads[fsId]
      }
    })

    return queue
  },

  get downloadable() {
    return Object.keys(this.downloadingItems).length < GM.getValue(ValueTypes.maxDownloadCount, this.maxDownloadCount)
  },

  get currentList() {
    return this.list.getCurrentList() as IItem[]
  },

  stopAll: function() {
    Object.values(this.downloadingItems).forEach((item) => {
      item.progress.request && item.progress.request.abort && item.progress.request.abort()
    })
  },
}
InstanceForSystem.initState()

export { InstanceForSystem }
