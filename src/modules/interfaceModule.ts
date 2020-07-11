import { GM } from '../gmInterface/gmInterface'
import { ValueTypes } from '../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = {
  maxDownloadCount: GM.getValue(ValueTypes.maxDownloadCount, 2),
  autoStart: GM.getValue(ValueTypes.autoStart, true),
  downloadModalOpen: false,
  configModalOpen: false,
}

type State = typeof initialState
export default createSlice({
  name: 'interface',
  initialState,
  reducers: {
    reset: (state) => {
      state = { ...initialState }
      return state
    },
    change: (state, action: PayloadAction<Partial<State>>) => {
      const { payload } = action
      Object.keys(payload).forEach((k) => {
        // Set key event
        const key = k as keyof State
        switch (key) {
          case 'autoStart':
            GM.setValue(ValueTypes.autoStart, payload.autoStart)
            break
          case 'maxDownloadCount':
            GM.setValue(ValueTypes.maxDownloadCount, payload.maxDownloadCount)
        }
      })
      state = Object.assign({ ...state }, action.payload)
      return state
    },
  },
})
