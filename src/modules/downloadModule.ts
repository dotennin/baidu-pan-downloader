import { IProgress, StatusTypes, HeaderTypes } from '../services/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProxy } from '../services/ItemProxy'
import { AppThunk } from '../store'
import { download, createPrivateShareLink, getSign, getDlink, getDownloadUrl } from '../services/api'
import { downloadableSelector } from '../selectors'
import interfaceModule from './interfaceModule'
import { InstanceForSystem } from '../services/InstaceForSystem'
import linkModule from './linkModule'

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
      delete state.downloadItems[action.payload.fsId]
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

export const addNextDownloadRequest = (): AppThunk => (dispatch) => {
  const { allDownloads } = InstanceForSystem
  Object.values(allDownloads)
    .filter((item) => {
      return item.progress.status === StatusTypes.inQueued
    })
    .forEach((item) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(fetchItem(item))
    })
}

export const fetchItem = (item: ItemProxy): AppThunk => async (dispatch, getState) => {
  try {
    const { progress } = item
    const downloadable = downloadableSelector(getState())
    const downloadMode = getState().interface.downloadMode

    if (item.isDir) {
      progress.status = StatusTypes.stopped
      dispatch(addNextDownloadRequest())
      return
    }

    if (!downloadable) {
      progress.status = StatusTypes.inQueued
      return
    }

    dispatch(downloadModule.actions.requestDownload())

    linkModule.actions.requestShareLinks()

    const privateShareLink = await createPrivateShareLink(item.fsId)

    const request = {
      surl: privateShareLink.shorturl.replace('https://pan.baidu.com/s/', ''),
      shareId: privateShareLink.shareid,
      uk: unsafeWindow.locals.get('uk') as string,
      bdstoken: unsafeWindow.locals.get('bdstoken') as string,
    }
    const signResponse = await getSign(request)

    let userAgent = undefined
    switch (downloadMode) {
      case 'LOCAL':
        const res: any = await getDownloadUrl(item.path)
        item.url = res.response.urls[0].url + '&filename=' + encodeURIComponent(item.serverFilename)

        userAgent = HeaderTypes.userAgentNetdisk
        break
      case 'SHARING':
        const dlinkReponse = await getDlink({
          fsId: item.fsId as string,
          time: signResponse.timestamp,
          sign: signResponse.sign,
          shareId: privateShareLink.shareid,
          uk: request.uk,
        })
        item.url = dlinkReponse[0].dlink

        userAgent = HeaderTypes.userAgentLogStatistic
    }

    progress.status = StatusTypes.downloading
    await download(item, { userAgent })

    dispatch(downloadModule.actions.successDownload())
    dispatch(addNextDownloadRequest())
  } catch (err) {
    dispatch(downloadModule.actions.failureDownload())
    dispatch(interfaceModule.actions.setError(err instanceof Error ? err : new Error(JSON.stringify(err))))
    dispatch(addNextDownloadRequest())
  }
}

export default downloadModule
