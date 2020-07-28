import { IInstance, IItem, IProgress, StatusTypes, ValueTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { ItemProxy } from './ItemProxy'
import { store } from '../store'
import downloadModule, { fetchItem } from '../modules/downloadModule'
import { Dispatch } from 'redux'
import interfaceModule from '../modules/interfaceModule'
import { getLocation } from '../utils'

type ItemObject = Record<ItemProxy['fsId'], ItemProxy>
const InstanceForSystem = {
  list: eval(`require('system-core:context/context.js')`).instanceForSystem.list as IInstance['list'],
  dialog: eval(`require("system-core:system/uiService/dialog/dialog.js")`) as IInstance['dialog'],
  hash: eval(`require('base:widget/hash/hash.js')`) as IInstance['hash'],
  friendlyFileSize: (size: number): string =>
    eval(`require('base:widget/tools/service/tools.format.js').toFriendlyFileSize(${size})`),
  maxDownloadCount: 2,
  allDownloads: {} as ItemObject,
  fileManagerApi:
    getLocation().inDiskScreen &&
    (eval(
      `require("disk-system:widget/system/fileService/fileManagerApi/fileManagerApi.js")`
    ) as IInstance['fileManagerApi']),
  listInit:
    getLocation().inDiskScreen &&
    (eval(`require("disk-system:widget/pageModule/list/listInit.js")`) as IInstance['listInit']),
  listInstance: eval(
    `require("system-core:context/context.js").instanceForSystem.listInstance`
  ) as IInstance['listInstance'],
  jquery: eval(`require("base:widget/libs/jquery-1.12.4.js")`),
  ui: eval(`require('system-core:context/context.js')`).instanceForSystem.ui as IInstance['ui'],
  getList: function() {
    return this.list.getList()
  },
  user: eval(`require('system-core:context/context.js')`).instanceForSystem.data.user as IInstance['user'],

  initState: function() {
    return new Promise((resolve) => {
      const objectFromValue = (GM.getValue(ValueTypes.items, {}) as IItem[]).map((arr) => ItemProxy.Create(arr))
      GM.deleteValue(ValueTypes.items)

      const state = store.getState()
      const dispatch: Dispatch<any> = store.dispatch
      const {
        interface: { autoStart },
      } = state

      const downloadItemsForStore: Record<ItemProxy['fsId'], IProgress> = {}
      objectFromValue.forEach((item) => {
        if (!autoStart && [StatusTypes.downloading, StatusTypes.inQueued].includes(item.progress.status)) {
          // stop downloading item if user set autoStart as false
          item.progress.status = StatusTypes.stopped
        }

        const { intervalId, percentCount, speedOverlay, status } = item.progress
        downloadItemsForStore[item.fsId] = { intervalId, percentCount, speedOverlay, status }
        this.allDownloads[item.fsId] = item

        if (autoStart && [StatusTypes.downloading].includes(status)) {
          dispatch(fetchItem(item))
        }
      })

      store.dispatch(downloadModule.actions.change({ downloadItems: downloadItemsForStore }))

      resolve(this)
    })
  },

  get selectedList() {
    const selected = this.list.getSelected()

    return (
      selected
        // .filter((arr) => {
        //   return arr.isdir !== 1
        // })
        .map((arr) => ItemProxy.Create(arr))
    )
  },

  get currentList() {
    return this.list.getCurrentList()
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
  InstanceForSystem.initState().then(() => {
    setTimeout(() => {
      const {
        download: { processing },
      } = store.getState()
      if (processing > 0) {
        // if there is a task that automatically starts downloading then open download-modal directly after initialization
        store.dispatch(interfaceModule.actions.change({ downloadModalOpen: true }))
      }
    }, 1500)
  })
})

export { InstanceForSystem }
