import React, { FunctionComponent } from 'react'
import FloatingButtons from './containers/FloatingButtons'
import DownloadList from './containers/DownloadList'
import Preferences from './containers/Preferences'
import './services/windowInstance'
import { GlobalStyle } from './GlobalStyle'

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default App
