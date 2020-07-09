import { IItem, IProgress, StatusTypes } from '../types'
import { GM } from '../gmInterface/gmInterface'
import { downloadActionCreator } from '../store/download'
import { store } from '../store'

export class ProgressProxy {
  public readonly intervalId: number | undefined
  public readonly speedOverlay: number
  public readonly request: ReturnType<typeof GM.download> | undefined
  private _status!: StatusTypes
  private _percentCount!: number
  private fsId: string | number

  public static Parse(d: any): ProgressProxy {
    return ProgressProxy.Create(d)
  }
  public static Create(fsId: string | number): ProgressProxy {
    return new ProgressProxy(fsId)
  }
  private constructor(fsId: string | number) {
    this.fsId = fsId
    this.percentCount = 0
    this.speedOverlay = 0
    this.status = StatusTypes.unknow
  }
  set percentCount(v: number) {
    if (this._percentCount !== v) {
      const { allDownloads } = store.getState().download
      if (allDownloads[this.fsId]) {
        this._percentCount = v
        store.dispatch(downloadActionCreator.updateItem(allDownloads[this.fsId]))
        return
      }
    }
    this._percentCount = v
  }

  get percentCount() {
    return this._percentCount
  }

  set status(v: StatusTypes) {
    if (this._status === v) return
    this._status = v
    if (v === StatusTypes.unknow) return

    const { allDownloads } = store.getState().download
    if (allDownloads[this.fsId]) {
      store.dispatch(downloadActionCreator.updateItem(allDownloads[this.fsId]))
    }
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
    this.progress = ProgressProxy.Create(this.fsId)
  }
}
