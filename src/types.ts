import { GM } from './gmInterface/gmInterface'
export enum valueTypes {
  downloadingItems = 'DOWNLOADING_ITEMS',
  stoppedItems = 'STOPPED_ITEMS',
  completedItems = 'COMPLETED_ITEMS',
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
  progressLoader?: NodeJS.Timeout
}
