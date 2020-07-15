import React, { ErrorInfo } from 'react'
import { IStoreState, store } from '../store'
import { connect } from 'react-redux'
import interfaceModule from '../modules/interfaceModule'
import devNodeEnv from '../utils/nodeEnvIs/devNodeEnv'
import { InstanceForSystem } from './InstaceForSystem'

interface IState {
  error: Error | null
  errorInfo: ErrorInfo | null
}
const mapStoreToProps = (store: IStoreState) => {
  return {
    error: store.interface.error,
  }
}
class ErrorBoundary extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = { error: null, errorInfo: null }
    this.reRenderApp = this.reRenderApp.bind(this)
  }

  componentDidCatch(error: IState['error'], errorInfo: IState['errorInfo']) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  private reRenderApp() {
    this.setState({ error: null, errorInfo: null })
    store.dispatch(interfaceModule.actions.setError(undefined))
  }

  render() {
    const error: Error = this.props.error || this.state.error
    if (error) {
      const errorMessage =
        error.toString() +
        (this.state.errorInfo && devNodeEnv
          ? `<details style="white-space: pre-wrap">${this.state.errorInfo?.componentStack}</details>`
          : '')
      InstanceForSystem.dialog.alert({
        body: errorMessage,
        onSure: this.reRenderApp,
        onClose: this.reRenderApp,
      })
      return null
    } else {
      // Normally, just render children
      return this.props.children
    }
  }
}

export default connect(mapStoreToProps)(ErrorBoundary)
