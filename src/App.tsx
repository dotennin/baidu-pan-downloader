import React, { FunctionComponent } from 'react'
import FloatingButtons from './containers/FloatingButtons'
import DownloadList from './containers/DownloadList'
import Preferences from './containers/Preferences'
import './services/windowInstance'
import { GlobalStyle } from './GlobalStyle'
import ErrorBoundary from './services/ErrorBoundary'

const App: FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <div
        css={`
          display: none;
        `}
      >
        Don’t know the reason. Once delete this element, Styled-components will not load properly.
      </div>
      <GlobalStyle />
      <DownloadList />
      <Preferences />
      <FloatingButtons />
    </ErrorBoundary>
  )
}

export default App
