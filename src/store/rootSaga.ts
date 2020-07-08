import { all, cancel, fork, take } from 'redux-saga/effects'
import devNodeEnv from '../utils/nodeEnvIs/devNodeEnv'
import downloadSaga from './download/saga'
import createSagaMiddleware from 'redux-saga'

function* rootSaga(): Iterator<{}> {
  yield all([...downloadSaga])
}

const sagas = [rootSaga]

export const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR'

function createAbortableSaga(saga: any) {
  if (devNodeEnv) {
    return function* main() {
      const sagaTask = yield fork(saga)
      yield take(CANCEL_SAGAS_HMR)
      yield cancel(sagaTask)
    }
  }
  return saga
}

const sagaManager = {
  startSaga(sagaMiddleware: ReturnType<typeof createSagaMiddleware>) {
    sagas.map(createAbortableSaga).forEach((saga) => sagaMiddleware.run(saga))
  },
  cancelSaga(store: any) {
    store.dispatch({
      type: CANCEL_SAGAS_HMR,
    })
  },
}

export { sagaManager }
