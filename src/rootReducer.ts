import { combineReducers } from '@reduxjs/toolkit'
import interfaceModule from './modules/interfaceModule'
import downloadModule from './modules/downloadModule'
const rootReducer = combineReducers({
  download: downloadModule.reducer,
  interface: interfaceModule.reducer,
})
export default rootReducer
