/* eslint-disable @typescript-eslint/no-object-literal-type-assertion,no-undef */
import { IItem } from './types'

const InstanceForSystem = {
  // eslint-disable-next-line no-undef
  list: require('system-core:context/context.js').instanceForSystem.list,
  autoStart: true,
  maxDownloadCount: 1,
  downloadingItems: {} as Record<IItem['fs_id'], IItem>,
  stoppedItems: {} as Record<IItem['fs_id'], IItem>,
  completedItems: {} as Record<IItem['fs_id'], IItem>,
  allDownloads: {} as Record<IItem['fs_id'], IItem>,

  get selectedList() {
    const objectFromValue = Object.assign(
      // @ts-ignore
      GM_getValue('downloadingItems', {}),
      // @ts-ignore
      GM_getValue('stoppedItems', {})
    )
    // @ts-ignore
    GM_deleteValue('downloadingItems')
    // @ts-ignore
    GM_deleteValue('stoppedItems')
    const selected: IItem[] = this.list.getSelected()

    return selected
      .filter((arr) => {
        return arr.isdir !== 1
      })
      .concat(Object.values(objectFromValue))
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
    return Object.keys(this.downloadingItems).length < this.maxDownloadCount
  },

  get currentList() {
    return this.list.getCurrentList() as IItem[]
  },

  stopAll: function() {
    Object.values(this.downloadingItems).forEach((item) => {
      item.request!.abort()
    })
  },
}

export { InstanceForSystem }
