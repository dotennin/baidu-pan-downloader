import { InstanceForSystem } from '../../InstaceForSystem'
const { downloadingItems, stoppedItems, completedItems, itemsFromQueue, allDownloads } = InstanceForSystem

const state = {
  stoppedItems,
  completedItems,
  downloadingItems,
  itemsFromQueue,
  allDownloads,
  processing: {
    url: 0,
    data: 0,
  },
}

export default state
