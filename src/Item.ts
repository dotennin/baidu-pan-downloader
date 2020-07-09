import { IItem, IProgress, StatusTypes } from './types'
import { GM } from './gmInterface/gmInterface'

export class ProgressProxy {
  public readonly intervalId: number | undefined
  private _status!: StatusTypes
  public readonly percentCount: number
  public readonly speedOverlay: string
  public readonly request: ReturnType<typeof GM.download> | undefined
  // private item: ItemProxy
  public static Parse(): ProgressProxy {
    return ProgressProxy.Create()
  }
  public static Create(): ProgressProxy {
    return new ProgressProxy()
  }
  private constructor() {
    this.status = StatusTypes.unknow
    this.percentCount = 0
    this.speedOverlay = ''
    // this.item = i
  }

  set status(v: StatusTypes) {
    this._status = v
    console.log(v)
    // store.dispatch(downloadActionCreator.updateItem(this.item))
  }
  get status() {
    return this._status
  }
}

export class ItemProxy {
  public readonly category: number
  public readonly fsId: string | number
  public readonly isDir: number
  public readonly localCtime: number
  public readonly localMtime: number
  public readonly md5: string
  public readonly operId: number
  public readonly path: string
  public readonly privacy: number
  public readonly serverAtime: number
  public readonly serverCtime: number
  public readonly serverFilename: string
  public readonly serverMtime: number
  public readonly share: number
  public readonly size: number
  public readonly unList: number
  public url: string
  public readonly progress: IProgress
  public static Parse(d: string): ItemProxy {
    return ItemProxy.Create(JSON.parse(d))
  }
  public static Create(d: IItem): ItemProxy {
    return new ItemProxy(d)
  }
  private constructor(d: IItem) {
    this.category = d.category
    this.fsId = d.fs_id
    this.isDir = d.isdir
    this.localCtime = d.local_ctime
    this.localMtime = d.local_mtime
    this.md5 = d.md5
    this.operId = d.oper_id
    this.path = d.path
    this.privacy = d.privacy
    this.serverAtime = d.server_atime
    this.serverCtime = d.server_ctime
    this.serverFilename = d.server_filename
    this.serverMtime = d.server_mtime
    this.share = d.share
    this.size = d.size
    this.unList = d.unlist
    this.url = d.url
    this.progress = ProgressProxy.Create()
  }
}
