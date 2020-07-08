import React, { FunctionComponent } from 'react'
import FloatingButtons from './containers/FloatingButtons'
import DownloadList from './containers/DownloadList'
import Preferences from './containers/Preferences'
import './services/windowInstance'

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <DownloadList />
      <Preferences />
      <FloatingButtons />
    </React.Fragment>
  )
}

export default App
