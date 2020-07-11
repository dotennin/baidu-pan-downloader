import { createSelector } from '@reduxjs/toolkit'
import { IStoreState } from './store'
import { StatusTypes } from './types'

const downloadableSelector = createSelector(
  (store: IStoreState) => store.download.downloadItems,
  (store: IStoreState) => store.interface.maxDownloadCount,
  (allDownloads, maxDownloadCount) => {
    return (
      Object.values(allDownloads).filter((item) => item.status === StatusTypes.downloading).length < maxDownloadCount
    )
  }
)

export { downloadableSelector }
