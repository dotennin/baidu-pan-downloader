import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProxy } from '../services/ItemProxy'
import { AppThunk } from '../store'
import { createPrivateShareLink, getSign, getDlink, getDlinkPan } from '../services/api'
import { postOpen } from '../utils'
import { InstanceForSystem } from '../services/InstaceForSystem'

interface IState {
  response?: PromiseReturnType<typeof getDlinkPan>
  progress: number
  shareLink: {
    progress: number
    response?: PromiseReturnType<typeof getDlink>
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

const fetchLink = (items: ItemProxy[], app_id?: string): AppThunk => async (dispatch) => {
  try {
    linkModule.actions.requestDownload()
    const response = await getDlinkPan(items)
    app_id = app_id || InstanceForSystem.appIds[0]
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

    const privateShareLink = await createPrivateShareLink(item.fsId)

    const request = {
      surl: privateShareLink.shorturl.replace('https://pan.baidu.com/s/', ''),
      shareId: privateShareLink.shareid,
      uk: unsafeWindow.locals.get('uk') as string,
      bdstoken: unsafeWindow.locals.get('bdstoken') as string,
    }
    const signReponse = await getSign(request)

    const dlinkReponse = await getDlink({
      fsId: item.fsId as string,
      time: signReponse.timestamp,
      sign: signReponse.sign,
      shareId: privateShareLink.shareid,
      uk: request.uk,
    })

    dispatch(linkModule.actions.successShareLinks(dlinkReponse))
    return true
  } catch (e) {
    linkModule.actions.failureShareLinks()
  }
}

const fetchShareLinksFromLocation = (): AppThunk => async () => {
  try {
    linkModule.actions.requestShareLinks()
    const body = {
      surl: window.location.href.replace(window.location.hash, '').replace(window.location.origin + '/s/', ''),
      randsk: InstanceForSystem.cookie.getCookie('BDCLND'),
    }
    postOpen('https://pan.dotennin.ml', body)
  } catch (e) {
    linkModule.actions.failureShareLinks()
  }
}

export default linkModule
export { fetchLink, fetchShareLinks, fetchShareLinksFromLocation }
