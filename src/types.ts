import { GM } from './gmInterface/gmInterface'
export enum StatusTypes {
  downloading = 'DOWNLOADING',
  stopped = 'STOPPED',
  completed = 'COMPLETED',
  inQueued = 'IN_QUEUED',
  error = 'ERROR',
}

export enum ValueTypes {
  items = 'ITEM_LIST',
  autoStart = 'AUTO_START',
  maxDownloadCount = 'MAX_DOWNLOAD_COUNT',
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
  request?: ReturnType<typeof GM.download>
  progress_loader_id?: number
  status: StatusTypes
}
