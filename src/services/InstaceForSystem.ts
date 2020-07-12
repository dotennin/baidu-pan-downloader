import { IItem, IProgress, StatusTypes, ValueTypes } from '../types'
import { GM } from '../gmInterface/gmInterface'
import { ItemProxy } from './Item'
import { store } from '../store'
import downloadModule from '../modules/downloadModule'

type ItemObject = Record<ItemProxy['fsId'], ItemProxy>
const InstanceForSystem = {
  list: eval(`require('system-core:context/context.js')`).instanceForSystem.list,
  maxDownloadCount: 2,
  allDownloads: {} as ItemObject,

  initState: function() {
    return new Promise((resolve) => {
      const objectFromValue = (GM.getValue(ValueTypes.items, {}) as IItem[]).map((arr) => ItemProxy.Create(arr))
      GM.deleteValue(ValueTypes.items)

      const state = store.getState()
      const {
        interface: { autoStart },
      } = state

      const downloadItemsForStore: Record<ItemProxy['fsId'], IProgress> = {}
      objectFromValue.forEach((item) => {
        if (!autoStart && item.progress.status === StatusTypes.downloading) {
          // stop downloading item if user set autoStart as false
          item.progress.status = StatusTypes.stopped
        }

        const { intervalId, percentCount, speedOverlay, status } = item.progress
        downloadItemsForStore[item.fsId] = { intervalId, percentCount, speedOverlay, status }
        this.allDownloads[item.fsId] = item
      })

      store.dispatch(downloadModule.actions.change({ downloadItems: downloadItemsForStore }))

      // if (autoStart) {
      //   store.dispatch(fetchItem(item))
      // }

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

// Resolve store initiation
setTimeout(() => {
  InstanceForSystem.initState()
})

export { InstanceForSystem }
