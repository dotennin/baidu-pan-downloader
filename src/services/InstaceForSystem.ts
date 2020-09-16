import { IInstance, IItem, IProgress, StatusTypes, ValueTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { ItemProxy } from './ItemProxy'
import { store } from '../store'
import downloadModule, { fetchItem } from '../modules/downloadModule'
import { Dispatch } from 'redux'
import { getLocation } from '../utils'
import TreeView from '../components/TreeView'

type ItemObject = Record<ItemProxy['fsId'], ItemProxy>
const InstanceForSystem = {
  maxDownloadCount: 2,
  allDownloads: {} as ItemObject,
  list: unsafeWindow.require('system-core:context/context.js').instanceForSystem.list as IInstance['list'],
  dialog: unsafeWindow.require('system-core:system/uiService/dialog/dialog.js') as IInstance['dialog'],
  hash: unsafeWindow.require('base:widget/hash/hash.js') as IInstance['hash'],
  friendlyFileSize: (size: number): string =>
    unsafeWindow.require('base:widget/tools/service/tools.format.js').toFriendlyFileSize(size),
  fileManagerApi:
    getLocation().inDiskScreen &&
    (unsafeWindow.require(
      'disk-system:widget/system/fileService/fileManagerApi/fileManagerApi.js'
    ) as IInstance['fileManagerApi']),
  listInit:
    getLocation().inDiskScreen &&
    (unsafeWindow.require('disk-system:widget/pageModule/list/listInit.js') as IInstance['listInit']),
  listInstance: unsafeWindow.require('system-core:context/context.js').instanceForSystem
    .listInstance as IInstance['listInstance'],
  jquery: unsafeWindow.require('base:widget/libs/jquery-1.12.4.js'),
  ui: unsafeWindow.require('system-core:context/context.js').instanceForSystem.ui as IInstance['ui'],
  getList: unsafeWindow.require('system-core:context/context.js').instanceForSystem.getList as IInstance['getList'],
  user: unsafeWindow.require('system-core:context/context.js').instanceForSystem.data.user as IInstance['user'],
  cookie: unsafeWindow.require('base:widget/tools/service/tools.cookie.js') as IInstance['cookie'],
  message: unsafeWindow.require('system-core:context/context.js').instanceForSystem.message as IInstance['message'],
  router: unsafeWindow.require('system-core:context/context.js').instanceForSystem.router as IInstance['router'],
  initWidgetContext: function(callback?: Function) {
    const widget = unsafeWindow.require('function-widget-1:download/util/context.js')
    const initFunc = function() {
      if (!widget.getContext()) {
        widget.setContext(unsafeWindow.require('system-core:context/context.js').instanceForSystem)
      }
      callback && callback()
    }
    if (callback) {
      unsafeWindow.require.async('', initFunc)
    } else {
      initFunc()
    }
  },
  dlinkService: function<T extends IInstance['dlinkService']>(): Promise<T> {
    this.initWidgetContext()
    return new Promise((resolve) => {
      unsafeWindow.require.async('function-widget-1:download/service/dlinkService.js', resolve)
    })
  },
  getCacheData: function(key: string): Promise<IItem[]> {
    return new Promise((resolve) => {
      const { cache } = this.getList()
      const currentKey = cache.key
      cache.key = key
      cache.getCacheData(-1, (list: IItem[]) => {
        resolve(list)
        // 恢复默认key值
        cache.key = currentKey
      })
    })
  },
  initState: async function() {
    const objectFromValue = (GM.getValue(ValueTypes.items, []) as IItem[]).map((arr) => ItemProxy.Create(arr))
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
    this.itemRoot = await this.getCacheData('/')
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
  itemRoot: [] as React.ComponentProps<typeof TreeView>['tree'][],
}

export { InstanceForSystem }
