export type IWindowFeatures = Partial<{
  height: number
  width: number
  top: number
  left: number
  menubar: boolean
  scrollbars: boolean
  toolbar: boolean
  location: boolean
  status: boolean
  resizable: boolean
  [i: string]: boolean | number | string
}>

export interface IPortalProps {
  url?: string
  name?: '_blank' | '_self' | '_parent' | '_top'
  title: string
  features?: IWindowFeatures
  center?: 'parent' | 'screen'
  onClose: (e: BeforeUnloadEvent) => void
  onResize?: (ev: UIEvent) => any
  onBlur?: (e: Event & { target: Window }) => void
  currentScreen?: string
}
