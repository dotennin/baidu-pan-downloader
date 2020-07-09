import { createStandardAction } from 'typesafe-actions'
import { ActionType, getType, Reducer } from 'typesafe-actions'
import { GM } from '../../gmInterface/gmInterface'
import { ValueTypes } from '../../types'
import { InstanceForSystem } from '../../services/InstaceForSystem'

const { maxDownloadCount, autoStart } = InstanceForSystem
const initState = {
  maxDownloadCount: GM.getValue(ValueTypes.maxDownloadCount, maxDownloadCount),
  autoStart: GM.getValue(ValueTypes.autoStart, autoStart),
  downloadable: true,
  downloadModalOpen: false,
  configModalOpen: false,
}

const actionCreator = {
  change: createStandardAction('INTERFACE/CHANGE')<Partial<State>>(),
  reset: createStandardAction('INTERFACE/RESET')(),
}

type State = typeof initState
const reducer: Reducer<State, ActionType<typeof actionCreator>> = (state = initState, action) => {
  switch (action.type) {
    case getType(actionCreator.reset):
      return Object.assign({}, initState)
    case getType(actionCreator.change):
      Object.keys(action.payload).forEach((k) => {
        // Set key event
        const key = k as keyof State
        switch (key) {
          case 'autoStart':
            GM.setValue(ValueTypes.autoStart, action.payload.maxDownloadCount)
            break
          case 'maxDownloadCount':
            GM.setValue(ValueTypes.maxDownloadCount, action.payload.maxDownloadCount)
        }
      })
      return Object.assign({ ...state }, action.payload)
  }
  return state
}

export { actionCreator as interfaceActionCreator, reducer as interfaceReducer, initState as interfaceState }
