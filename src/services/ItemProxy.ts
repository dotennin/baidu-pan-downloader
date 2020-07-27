import { IItem, IProgress, StatusTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { store } from '../store'
import downloadModule from '../modules/downloadModule'

/**
 * Check the arg whether IItem interface or not
 * @param arg
 */
function implementsItem(arg: any): arg is IItem {
  return arg !== null && typeof arg === 'object' && typeof arg.fs_id !== 'undefined'
}

export class ProgressProxy {
  public intervalId: number | undefined
  public request: ReturnType<typeof GM.download> | undefined
  public _speedOverlay!: number
  private _status!: StatusTypes
  private _percentCount!: number
  private fsId: string | number

  public static Parse(d: any): ProgressProxy {
    return ProgressProxy.Create(d)
  }
  public static Create(fsId: string | number, defaultState?: IProgress): ProgressProxy {
    return new ProgressProxy(fsId, defaultState)
  }
  private constructor(fsId: string | number, defaultState?: IProgress) {
    this.fsId = fsId
    if (defaultState) {
      Object.assign(this, defaultState)
    } else {
      this.percentCount = 0
      this.speedOverlay = 0
      this.status = StatusTypes.unknow
    }
  }
  set speedOverlay(v: number) {
    if (this._speedOverlay === v) return
    this._speedOverlay = v
    store.dispatch(
      downloadModule.actions.updateProgress({
        fsId: this.fsId,
        progress: {
          speedOverlay: this.speedOverlay,
        },
      })
    )
  }
  get speedOverlay() {
    return this._speedOverlay
  }
  set percentCount(v: number) {
    if (this._percentCount === v) return
    this._percentCount = v
    store.dispatch(
      downloadModule.actions.updateProgress({
        fsId: this.fsId,
        progress: {
          percentCount: this.percentCount,
        },
      })
    )
  }

  get percentCount() {
    return this._percentCount
  }

  set status(v: StatusTypes) {
    if (this._status === v) return
    this._status = v
    if (v === StatusTypes.unknow) return
    store.dispatch(
      downloadModule.actions.updateProgress({
        fsId: this.fsId,
        progress: {
          status: this.status,
        },
      })
    )
  }
  get status() {
    return this._status
  }
}

export class ItemProxy {
  public category!: number
  public fsId!: string | number
  public isDir!: boolean
  public localCtime!: number
  public localMtime!: number
  public md5!: string
  public operId!: number
  public path!: string
  public privacy!: number
  public serverAtime!: number
  public serverCtime!: number
  public serverFilename!: string
  public serverMtime!: number
  public share!: number
  public size!: number
  public unList!: number
  public url!: string
  public progress!: ProgressProxy
  public static Parse(d: string): ItemProxy {
    return ItemProxy.Create(JSON.parse(d))
  }
  public static Create(d: IItem | ItemProxy): ItemProxy {
    return new ItemProxy(d)
  }
  private constructor(d: IItem | ItemProxy) {
    if (implementsItem(d)) {
      this.category = d.category
      this.fsId = d.fs_id
      this.isDir = d.isdir === 1
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
    } else {
      Object.assign(this, d)
      this.progress = ProgressProxy.Create(this.fsId, this.progress)
    }
  }
}
