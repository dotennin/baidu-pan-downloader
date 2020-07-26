import React from 'react'
import ReactDOM from 'react-dom'
import { IPortalProps, IWindowFeatures } from './types'

/**
 * Convert features props to window features format (name=value,other=value).
 */
function toWindowFeatures(obj: IWindowFeatures) {
  return Object.keys(obj)
    .reduce((features: string[], name) => {
      const value = obj[name]
      if (typeof value === 'boolean') {
        features.push(`${name}=${value ? 'yes' : 'no'}`)
      } else {
        features.push(`${name}=${value}`)
      }
      return features
    }, [])
    .join(',')
}

class Portal extends React.PureComponent<IPortalProps, {}> {
  private externalWindow: Window | any

  protected static defaultProps: Omit<IPortalProps, 'onClose'> = {
    url: '',
    name: '_blank',
    title: '',
    center: 'parent',
    features: { width: 0, height: 0, resizable: true },
  }
  private containerEl: HTMLDivElement
  public constructor(props: IPortalProps) {
    super(props)
    this.externalWindow = null
    this.containerEl = document.createElement('div') // STEP 1: create an empty div
  }

  public componentDidMount() {
    this.openChild()
  }

  /**
   * Create the new window when Portal component mount.
   */
  private openChild() {
    const { url, name, features, center } = this.props

    // Prepare position of the new window to be centered against the 'parent' window or 'screen'.
    if (features) {
      if (features.width && features.height) {
        switch (center) {
          case 'screen':
            const screenLeft = window.screenLeft
            const screenTop = window.screenTop

            const width = window.innerWidth
              ? window.innerWidth
              : document.documentElement.clientWidth
              ? document.documentElement.clientWidth
              : window.screen.width
            const height = window.innerHeight
              ? window.innerHeight
              : document.documentElement.clientHeight
              ? document.documentElement.clientHeight
              : window.screen.height

            features.left = width / 2 - features.width / 2 + screenLeft
            features.top = height / 2 - features.height / 2 + screenTop
            break
          case 'parent':
            features.left = window.top.outerWidth / 2 + window.top.screenX - features.width / 2
            features.top = window.top.outerHeight / 2 + window.top.screenY - features.height / 2
            break
        }
      }
    }

    this.externalWindow = window.open(url, name, toWindowFeatures(features || {}))
    this.externalWindow.document.body.appendChild(this.containerEl)
    if (this.props.features) {
      this.externalWindow.resizeTo(this.props.features.width, this.props.features.height)
    }

    this.copyStyle()
  }

  public copyStyle() {
    const { features } = this.props
    this.externalWindow.onbeforeunload = null
    this.externalWindow.onunload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      this.props.onClose(e)
    }
    this.externalWindow.onblur = this.props.onBlur
    this.externalWindow.onresize = (e: UIEvent) => {
      if (features && features.resizable === false) {
        // Disable resize
        this.externalWindow.resizeTo(features.width, features.height)
      }
      this.props.onResize && this.props.onResize(e)
    }

    const externalDocument = this.externalWindow.document
    externalDocument.head.innerHTML = ''

    const title = externalDocument.createElement('title')
    title.innerText = this.props.title
    externalDocument.head.appendChild(title)

    // Inject global style
    Array.from(document.head.getElementsByTagName('META')).forEach((style) => {
      externalDocument.head.innerHTML += style.outerHTML
    })
    Array.from(document.head.getElementsByTagName('STYLE')).forEach((style) => {
      externalDocument.head.innerHTML += style.outerHTML.replace(
        /(['"(])(\/static\/media\/)/gm,
        `$1${window.location.origin}$2`
      )
    })
    Array.from(document.head.getElementsByTagName('LINK')).forEach((link) => {
      externalDocument.head.innerHTML += link.outerHTML.replace(/href="(.+)/gm, `href="${window.location.origin}$1`)
    })
    Array.from(document.head.getElementsByTagName('SCRIPT')).forEach((script) => {
      externalDocument.head.innerHTML += script.outerHTML.replace(
        /(['"(])(\/static\/js\/)/gm,
        `$1${window.location.origin}$2`
      )
    })
  }

  public componentWillUnmount() {
    if (this.externalWindow) {
      this.externalWindow.close()
    }
  }

  public render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl)
  }
}

export default Portal
