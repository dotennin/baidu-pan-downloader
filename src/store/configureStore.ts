import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { createReducer } from './rootReducer'
import { sagaManager } from './rootSaga'

function configureStore(): Store<ReturnType<ReturnType<typeof createReducer>>> {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  const enhancers = [applyMiddleware(...middlewares)]

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 10 })
    : compose

  const rootReducer = createReducer()
  const store: any = createStore(rootReducer, composeEnhancers(...enhancers))

  store.runSaga = sagaMiddleware.run
  store.startAbortableSaga = () => sagaManager.startSaga(sagaMiddleware)
  store.close = () => store.dispatch(END)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = createReducer()
      store.replaceReducer(newRootReducer)
    })

    module.hot.accept('./rootSaga', () => {
      sagaManager.cancelSaga(store)
      require('./rootSaga').sagaManager.startSaga(sagaMiddleware)
    })
  }

  sagaManager.startSaga(sagaMiddleware)

  return store
}

export { configureStore }
