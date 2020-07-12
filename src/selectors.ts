import { createSelector } from '@reduxjs/toolkit'
import { IStoreState } from './store'

const downloadableSelector = createSelector(
  (store: IStoreState) => store.download.processing,
  (store: IStoreState) => store.interface.maxDownloadCount,
  (processing, maxDownloadCount) => {
    return processing < maxDownloadCount
  }
)

export { downloadableSelector }
