export enum StatusTypes {
  downloading = 'DOWNLOADING',
  stopped = 'STOPPED',
  completed = 'COMPLETED',
  inQueued = 'IN_QUEUED',
  error = 'ERROR',
  unknow = 'UNKONW',
}

export enum ValueTypes {
  items = 'ITEM_LIST',
  autoStart = 'AUTO_START',
  maxDownloadCount = 'MAX_DOWNLOAD_COUNT',
}

export enum HeaderTypes {
  userAgent = 'netdisk;P2SP;2.2.60.26',
}

export interface IItem {
  category: number
  fs_id: string | number
  isdir: number
  local_ctime: number
  local_mtime: number
  md5: string
  oper_id: number
  path: string
  privacy: number
  server_atime: number
  server_ctime: number
  server_filename: string
  server_mtime: number
  share: number
  size: number
  unlist: number
  url: string
}

export interface IProgress {
  intervalId?: number
  status: StatusTypes
  percentCount: number
  speedOverlay: number
}

interface IDialogAlertConfig {
  body: string
  title?: string
  width?: string
  sureText?: string
  cancelText?: string
  onSure?: Function
  onClose?: Function
}

interface IDialogConfirmConfig extends IDialogAlertConfig {
  title: string
  onCancel?: Function
  extra?: Function
}
export interface IDialog {
  alert: (configOrBody: string | IDialogAlertConfig) => void
  confirm: <T extends string | IDialogConfirmConfig>(title: T, message: T extends string ? string : never) => void
}
