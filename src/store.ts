import { Action, ThunkAction, getDefaultMiddleware, configureStore, compose } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'

const middleware = [
  ...getDefaultMiddleware({ serializableCheck: false }),
  createLogger({ diff: true, collapsed: true }),
]

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 10 })
  : compose

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [composeEnhancers],
})

export type IStoreState = ReturnType<typeof store.getState>
export const storeSelector = (store: IStoreState) => store
export type AppThunk = ThunkAction<void, IStoreState, unknown, Action<string>>
