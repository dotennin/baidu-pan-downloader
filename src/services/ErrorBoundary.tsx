import React, { ErrorInfo } from 'react'
import { Modal } from '../components/Modal'

interface IState {
  error: Error | null
  errorInfo: ErrorInfo | null
  open: boolean
}
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
    if (this.state.errorInfo) {
      // Error path
      return (
        <Modal style={{ color: 'red' }} open={this.state.open} close={() => this.setState({ open: false })}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </Modal>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

export default ErrorBoundary
