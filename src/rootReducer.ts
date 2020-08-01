import { combineReducers } from '@reduxjs/toolkit'
import interfaceModule from './modules/interfaceModule'
import downloadModule from './modules/downloadModule'
import linkModule from './modules/linkModule'
const rootReducer = combineReducers({
  download: downloadModule.reducer,
  interface: interfaceModule.reducer,
  link: linkModule.reducer,
})
export default rootReducer
