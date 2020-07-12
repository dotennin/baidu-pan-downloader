import React, { ComponentType, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { name } from '../package.json'
import devNodeEnv from './utils/nodeEnvIs/devNodeEnv'
import { addLocationChangeCallback, log } from './utils'
import { GlobalStyle } from './GlobalStyle'
import { Provider } from 'react-redux'
import { store } from './store'
import ErrorBoundary from './services/ErrorBoundary'

function render(RootComponent: ComponentType) {
  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<div>on suspensing....</div>}>
        <GlobalStyle />
        <ErrorBoundary>
          <RootComponent />
        </ErrorBoundary>
      </Suspense>
    </Provider>,
    document.getElementById(name)
  )
}

// Do required initial work. Gets called every time the URL changes,
// so that elements can be re-inserted as a user navigates a page with
// different routes.
async function main() {
  document.body.insertAdjacentHTML('beforeend', `<div id="${name}"></div>`)
  render(require('./App').default)
}

addLocationChangeCallback(() => {
  // Tampermonkey doesn't bubble errors up to the main console,
  // so we have to catch them manually and log them
  main().catch((e) => log(e))
})

if (devNodeEnv && module.hot) {
  module.hot.accept('./App.tsx', () => {
    render(require('./App').default)
  })
}
