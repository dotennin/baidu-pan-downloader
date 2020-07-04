import { IItem, StatusTypes, ValueTypes } from './types'
import { GM } from './gmInterface/gmInterface'

const InstanceForSystem = {
  list: eval(`require('system-core:context/context.js')`).instanceForSystem.list,
  maxDownloadCount: 2,
  downloadingItems: {} as Record<IItem['fs_id'], IItem>,
  stoppedItems: {} as Record<IItem['fs_id'], IItem>,
  completedItems: {} as Record<IItem['fs_id'], IItem>,
  allDownloads: {} as Record<IItem['fs_id'], IItem>,

  initState: function() {
    const objectFromValue: Record<IItem['fs_id'], IItem> = GM.getValue(ValueTypes.items, {})
    GM.deleteValue(ValueTypes.items)

    this.allDownloads = objectFromValue

    Object.values(objectFromValue).forEach((item) => {
      if (!this.autoStart && item.status === StatusTypes.downloading) {
        // stop downloading item if user set autoStart as false
        item.status = StatusTypes.stopped
      }
      if (item.status === StatusTypes.completed) {
        this.completedItems[item.fs_id] = item
      }
      if (item.status === StatusTypes.stopped) {
        this.stoppedItems[item.fs_id] = item
      }
    })

    return this
  },

  get autoStart() {
    return GM.getValue(ValueTypes.autoStart, true)
  },
  get selectedList() {
    const selected: IItem[] = this.list.getSelected()

    return selected.filter((arr) => {
      return arr.isdir !== 1
    })
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get itemsFromQueue() {
    const queue: Record<IItem['fs_id'], IItem> = {}
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
      item.request && item.request.abort && item.request.abort()
    })
  },
}

export { InstanceForSystem }
