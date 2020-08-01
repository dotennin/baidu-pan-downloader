import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProxy } from '../services/ItemProxy'
import { AppThunk } from '../store'
import { getDlinkPan, getNaifeiLinks, createPrivateShareLink } from '../services/api'
import { ValueTypes } from '../services/types'
import { getRandomInt } from '../utils'

interface IState {
  response?: PromiseReturnType<typeof getDlinkPan>
  progress: number
  naifeiLink: {
    progress: number
    response?: PromiseReturnType<typeof getNaifeiLinks>
  }
}
const initialState: IState = {
  response: undefined,
  progress: 0,
  naifeiLink: {
    progress: 0,
    response: undefined,
  },
}

const linkModule = createSlice({
  name: 'dlink',
  initialState,
  reducers: {
    requestDownload: (state) => {
      state.progress += 1
      return state
    },
    successDownload: (state, action: PayloadAction<IState['response']>) => {
      state.response = action.payload
      state.progress -= 1
      return state
    },
    failureDownload: (state) => {
      state.progress -= 1
      return state
    },
    requestNaifeiDownload: (state) => {
      state.naifeiLink.progress += 1
      return state
    },
    successNaifeiDownload: (state, action: PayloadAction<IState['naifeiLink']['response']>) => {
      state.naifeiLink.response = action.payload
      state.naifeiLink.progress -= 1
      return state
    },
    failureNaifeiDownload: (state) => {
      state.naifeiLink.progress -= 1
      return state
    },
  },
})

const appIds = [498065, 309847, 778750]

const fetchLink = (items: ItemProxy[]): AppThunk => async (dispatch) => {
  try {
    linkModule.actions.requestDownload()
    const response = await getDlinkPan(items)
    const app_id = appIds[getRandomInt(appIds.length)]
    response.dlink.forEach((link) => {
      const targetItem = items.find((item) => item.fsId.toString() === link.fs_id)
      if (targetItem) {
        link.link =
          'https://pcs.baidu.com/rest/2.0/pcs/file?method=download&app_id=' +
          app_id +
          '&filename=' +
          encodeURIComponent(targetItem.serverFilename) +
          '&path=' +
          encodeURIComponent(targetItem.path)
      }
    })
    dispatch(linkModule.actions.successDownload(response))
  } catch (e) {
    linkModule.actions.failureDownload()
  }
}

const fetchNaifeiLink = (item: ItemProxy): AppThunk => async (dispatch) => {
  try {
    linkModule.actions.requestNaifeiDownload()

    const response = await createPrivateShareLink(item.fsId)

    const naifeiLinks = await getNaifeiLinks(response.shorturl, 'qqqq')
    dispatch(linkModule.actions.successNaifeiDownload(naifeiLinks))
  } catch (e) {
    linkModule.actions.failureNaifeiDownload()
  }
}

const fetchNaifeiLinkFromLocation = (): AppThunk => async (dispatch) => {
  try {
    linkModule.actions.requestNaifeiDownload()
    const sharePwd = window.localStorage.getItem(ValueTypes.sharePassword) as string
    const shareLinks = await getNaifeiLinks(window.location.href.replace(window.location.hash, ''), sharePwd)
    dispatch(linkModule.actions.successNaifeiDownload(shareLinks))
  } catch (e) {
    linkModule.actions.failureNaifeiDownload()
  }
}

export default linkModule
export { fetchLink, fetchNaifeiLink, fetchNaifeiLinkFromLocation }
