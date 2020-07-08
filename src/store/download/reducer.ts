import { Reducer } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import actionCreator from './actionCreator'
import state from './state'

type State = Readonly<typeof state>
const reducer: Reducer<State, ActionType<typeof actionCreator>> = (originState = state, action) => {
  const draft = { ...originState }
  switch (action.type) {
    case getType(actionCreator.reset):
      return Object.assign({}, draft)
    case getType(actionCreator.change.request):
      return Object.assign({ ...draft }, action.payload)
    case getType(actionCreator.updateItem):
      draft.allDownloads[action.payload.fsId] = action.payload
      break
    case getType(actionCreator.downloadURL.request):
      draft.processing.url += 1
      break
    case getType(actionCreator.downloadURL.success):
      draft.processing.url -= 1
      break
    case getType(actionCreator.downloadURL.failure):
      draft.processing.url -= 1
      break
    case getType(actionCreator.downloadItem.request):
      draft.processing.data += 1
      break
    case getType(actionCreator.downloadItem.success):
      draft.processing.data -= 1
      break
    case getType(actionCreator.downloadItem.failure):
      draft.processing.data -= 1
      break
  }
  return draft
}

export default reducer
