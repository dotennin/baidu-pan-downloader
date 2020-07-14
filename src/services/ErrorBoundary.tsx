import React, { ErrorInfo } from 'react'
import { Modal } from '../components/Modal'
import { IStoreState, store } from '../store'
import { connect } from 'react-redux'
import interfaceModule from '../modules/interfaceModule'
import devNodeEnv from '../utils/nodeEnvIs/devNodeEnv'

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
  }

  componentDidCatch(error: IState['error'], errorInfo: IState['errorInfo']) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.errorInfo || this.props.error) {
      // Error path
      return (
        <Modal
          style={{ color: 'red', wordBreak: 'break-all' }}
          open={true}
          close={() => {
            this.setState({ error: null, errorInfo: null })
            store.dispatch(interfaceModule.actions.setError(undefined))
          }}
        >
          <div style={{ border: '1px solid #000', margin: 4 }}>
            <h2 style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error?.toString()}
              {this.props.error?.toString()}
            </h2>
            {devNodeEnv && (
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.props.error?.stack}
                {this.state.errorInfo?.componentStack}
              </details>
            )}
          </div>
        </Modal>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

export default connect(mapStoreToProps)(ErrorBoundary)
