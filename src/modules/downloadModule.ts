import { GM } from '../gmInterface/gmInterface'
import { HeaderTypes, IProgress, StatusTypes } from '../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProxy } from '../services/Item'
import { AppThunk } from '../store'
import { getDownloadUrl } from '../services/api'
import { downloadableSelector } from '../selectors'
import interfaceModule from './interfaceModule'

const allDownloads: Record<ItemProxy['fsId'], IProgress> = {}
const initialState = {
  downloadItems: allDownloads,
  processing: 0,
}

type State = typeof initialState
const downloadModule = createSlice({
  name: 'download',
  initialState,
  reducers: {
    reset: (state) => {
      state = { ...initialState }
      return state
    },
    updateProgress: (state, action: PayloadAction<{ fsId: ItemProxy['fsId']; progress: Partial<IProgress> }>) => {
      const { fsId, progress } = action.payload
      const item = state.downloadItems[fsId]
      if (item) {
        state.downloadItems[fsId] = Object.assign(item, progress)
      }
      return state
    },
    change: (state, action: PayloadAction<Partial<State>>) => {
      const { payload } = action
      state = Object.assign(state, payload)
      return state
    },
    removeItem: (state, action: PayloadAction<{ fsId: ItemProxy['fsId'] }>) => {
      delete state.downloadItems[action.payload.fsId].status
      delete state.downloadItems[action.payload.fsId].intervalId
      delete state.downloadItems[action.payload.fsId].speedOverlay
      delete state.downloadItems[action.payload.fsId].percentCount
      delete state.downloadItems[action.payload.fsId]
      // state.downloadItems[action.payload.fsId].status = StatusTypes.unknow
      // state.downloadItems[action.payload.fsId].percentCount = 0
      // state.downloadItems[action.payload.fsId].intervalId = 0
      // state.downloadItems[action.payload.fsId].speedOverlay = 0
      return state
    },
    requestDownload: (state) => {
      state.processing += 1
      return state
    },
    successDownload: (state) => {
      state.processing -= 1
      return state
    },
    failureDownload: (state) => {
      state.processing -= 1
      return state
    },
  },
})

export const fetchItem = (item: ItemProxy): AppThunk => async (dispatch, getState) => {
  dispatch(downloadModule.actions.requestDownload())
  try {
    const { progress } = item
    const res: any = await getDownloadUrl(item.path)
    item.url = res.response.urls[0].url + '&filename=' + encodeURIComponent(item.serverFilename)

    const downloadable = downloadableSelector(getState())

    if (!downloadable) {
      progress.status = StatusTypes.inQueued
      return
    }

    progress.status = StatusTypes.downloading

    const { url, serverFilename } = item
    let currentEvent: ProgressEvent | undefined = undefined
    progress.percentCount = 0
    progress.speedOverlay = 0

    progress.request = GM.download({
      url,
      name: serverFilename,
      saveAs: true,
      headers: {
        Host: 'qdall01.baidupcs.com',
        Accept: '*/*',
        'User-Agent': HeaderTypes.userAgent,
        'Accept-Encoding': 'identity',
        'Accept-Language': 'ja-JP',
        'Accept-Charset': '*',
      },
      onprogress: (e: ProgressEvent) => {
        currentEvent = e

        progress.percentCount = Math.round((currentEvent.loaded * 100) / currentEvent.total)
      },
      onload: () => {
        progress.intervalId && clearInterval(progress.intervalId)
        progress.percentCount = 100
        progress.speedOverlay = 0
        progress.status = StatusTypes.completed

        GM.notification({
          text: '下载完成',
          title: serverFilename,
          highlight: true,
        })
        dispatch(downloadModule.actions.successDownload())

        // addNextDownloadRequest()
      },
      onerror: (e) => {
        progress.intervalId && clearInterval(progress.intervalId)
        progress.percentCount = 0
        progress.speedOverlay = 0
        progress.status = StatusTypes.error
        // eslint-disable-next-line no-console
        dispatch(downloadModule.actions.failureDownload())
        dispatch(interfaceModule.actions.setError(new Error(e.error)))

        // addNextDownloadRequest()
      },
    })

    let loaded = 0
    progress.intervalId = window.setInterval(() => {
      if (currentEvent) {
        const speed = currentEvent.loaded - loaded
        loaded = currentEvent.loaded
        progress.speedOverlay = speed
      }
    }, 1000)
  } catch (err) {
    dispatch(downloadModule.actions.failureDownload())
    dispatch(interfaceModule.actions.setError(err))
  }
}

export default downloadModule
