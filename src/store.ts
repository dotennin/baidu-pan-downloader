import { Action, ThunkAction, getDefaultMiddleware, configureStore, compose } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'
import devNodeEnv from './utils/nodeEnvIs/devNodeEnv'
import { fastLoggerMiddleware, reducerWrapper } from 'fast-redux-logger'

const middleware = [fastLoggerMiddleware, ...getDefaultMiddleware({ serializableCheck: false })]
if (devNodeEnv) {
  middleware.push(createLogger({ diff: true, collapsed: true }))
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 10 })
  : compose

export const store = configureStore({
  reducer: reducerWrapper(rootReducer) as typeof rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [composeEnhancers],
})
export type IStoreState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, IStoreState, unknown, Action<string>>

export const storeSelector = (store: IStoreState) => store
