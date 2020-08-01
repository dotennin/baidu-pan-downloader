import React, { FunctionComponent } from 'react'
import FloatingButtons from './containers/FloatingButtons'
import DownloadList from './containers/DownloadList'
import Preferences from './containers/Preferences'
import './services/windowInstance'
import { GlobalStyle } from './GlobalStyle'
import ErrorBoundary from './services/ErrorBoundary'
import DlinkPortal from './containers/DlinkPortal'
import NaifeiPortal from './containers/NaifeiPortal'

const App: FunctionComponent = () => {
  return (
    <>
      <div
        css={`
          display: none;
        `}
      >
        Todo Don’t know the reason. Once delete this element, Styled-components will not load properly.
      </div>
      <GlobalStyle />
      <ErrorBoundary>
        <DownloadList />
        <Preferences />
        <FloatingButtons />
        <NaifeiPortal />
        <DlinkPortal />
      </ErrorBoundary>
    </>
  )
}

export default App
