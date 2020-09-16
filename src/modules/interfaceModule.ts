import { GM } from '../services/gmInterface/gmInterface'
import { ValueTypes } from '../services/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  maxDownloadCount: number
  autoStart: boolean
  appId: string
  downloadModalOpen: boolean
  configModalOpen: boolean
  linkPortalOpen: boolean
  shareLinksPortalOpen: boolean
  itemLoaded: boolean

  error: undefined | Error
}
const initialState: IState = {
  maxDownloadCount: GM.getValue(ValueTypes.maxDownloadCount, 2),
  autoStart: GM.getValue(ValueTypes.autoStart, true),
  appId: GM.getValue(ValueTypes.appId, ''),
  downloadModalOpen: false,
  configModalOpen: false,
  linkPortalOpen: false,
  shareLinksPortalOpen: false,
  itemLoaded: false,

  error: undefined,
}

export default createSlice({
  name: 'interface',
  initialState,
  reducers: {
    reset: (state) => {
      state = { ...initialState }
      return state
    },
    change: (state, action: PayloadAction<Partial<IState>>) => {
      const { payload } = action
      Object.keys(payload).forEach((k) => {
        // Set key event
        const key = k as keyof IState
        switch (key) {
          case 'autoStart':
            GM.setValue(ValueTypes.autoStart, payload.autoStart)
            break
          case 'maxDownloadCount':
            GM.setValue(ValueTypes.maxDownloadCount, payload.maxDownloadCount)
            break
          case 'appId':
            GM.setValue(ValueTypes.appId, payload.appId)
        }
      })
      state = Object.assign({ ...state }, action.payload)
      return state
    },
    setError: (state, action: PayloadAction<IState['error']>) => {
      state.error = action.payload
      return state
    },
  },
})
