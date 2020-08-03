import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProxy } from '../services/ItemProxy'
import { AppThunk } from '../store'
import { getDlinkPan, getShareLinks, createPrivateShareLink } from '../services/api'
import { ValueTypes } from '../services/types'
import { getRandomInt } from '../utils'

interface IState {
  response?: PromiseReturnType<typeof getDlinkPan>
  progress: number
  shareLink: {
    progress: number
    response?: PromiseReturnType<typeof getShareLinks>
  }
}
const initialState: IState = {
  response: undefined,
  progress: 0,
  shareLink: {
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
    requestShareLinks: (state) => {
      state.shareLink.progress += 1
      return state
    },
    successShareLinks: (state, action: PayloadAction<IState['shareLink']['response']>) => {
      state.shareLink.response = action.payload
      state.shareLink.progress -= 1
      return state
    },
    failureShareLinks: (state) => {
      state.shareLink.progress -= 1
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

const fetchShareLinks = (item: ItemProxy): AppThunk => async (dispatch) => {
  try {
    linkModule.actions.requestShareLinks()

    const response = await createPrivateShareLink(item.fsId)

    const shareLinks = await getShareLinks(response.shorturl, 'qqqq')
    dispatch(linkModule.actions.successShareLinks(shareLinks))
  } catch (e) {
    linkModule.actions.failureShareLinks()
  }
}

const fetchShareLinksFromLocation = (): AppThunk => async (dispatch) => {
  try {
    linkModule.actions.requestShareLinks()
    const sharePwd = window.localStorage.getItem(ValueTypes.sharePassword) as string
    const shareLinks = await getShareLinks(window.location.href.replace(window.location.hash, ''), sharePwd)
    dispatch(linkModule.actions.successShareLinks(shareLinks))
  } catch (e) {
    linkModule.actions.failureShareLinks()
  }
}

export default linkModule
export { fetchLink, fetchShareLinks, fetchShareLinksFromLocation }
