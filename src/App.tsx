import React, { FunctionComponent } from 'react'
import FloatingButtons from './containers/FloatingButtons'
import DownloadList from './containers/DownloadList'
import Preferences from './containers/Preferences'
import './services/windowInstance'
import { GlobalStyle } from './GlobalStyle'
import ErrorBoundary from './services/ErrorBoundary'
import DlinksPortal from './containers/DlinksPortal'
import { FastReduxLogger } from './containers/FastReduxLogger'

const App: FunctionComponent = () => {
  return (
    <>
      <div
        css={`
          display: none;
        `}
      >
        Todo Not sure what the reason is Once delete this element, Styled-components will not load properly.
      </div>
      <GlobalStyle />
      <ErrorBoundary>
        <FastReduxLogger />
        <DownloadList />
        <Preferences />
        <FloatingButtons />
        <DlinksPortal />
      </ErrorBoundary>
    </>
  )
}

export default App
