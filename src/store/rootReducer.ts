import { combineReducers, Reducer } from 'redux'
import { downloadReducer } from './download'
import { interfaceReducer } from './Interface'

const combineReducer = combineReducers({
  download: downloadReducer,
  interface: interfaceReducer,
})
function createReducer(): Reducer<ReturnType<typeof combineReducer>> {
  return combineReducer
}

export { createReducer }
