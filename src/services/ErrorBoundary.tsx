import React, { ErrorInfo } from 'react'
import { Modal } from '../components/Modal'
import { IStoreState, store } from '../store'
import { connect } from 'react-redux'
import interfaceModule from '../modules/interfaceModule'

interface IState {
  error: Error | null
  errorInfo: ErrorInfo | null
  open: boolean
}
const mapStoreToProps = (store: IStoreState) => ({
  error: store.interface.error,
})
class ErrorBoundary extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = { error: null, errorInfo: null, open: true }
  }

  componentDidCatch(error: IState['error'], errorInfo: IState['errorInfo']) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if ((this.state.errorInfo || this.props.error) && this.state.open) {
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
          <h2>
            {this.state.error?.toString()}
            {this.props.error?.toString()}
          </h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.props.error?.stack}
            {this.state.errorInfo?.componentStack}
          </details>
        </Modal>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

export default connect(mapStoreToProps)(ErrorBoundary)