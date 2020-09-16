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
  appId = 'APP_ID',
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

export interface IInstance {
  dialog: {
    alert: (configOrBody: string | IDialogAlertConfig) => void
    confirm: <T extends string | IDialogConfirmConfig>(title: T, message?: T extends string ? string : never) => void
  }
  hash: {
    set: (key: string, value: string) => void
    get: (key: string) => string
    listen: (key: string, callback: Function) => void
    del: (key: string) => void
  }
  fileManagerApi: {
    createNewDir: (path: string, callback: (e: number) => void, resolveFileName: string) => void // 0 successful ?
    deleteFiles: (path: string[], callback: (e: number) => void) => void // 0 successful ?
    reName: (source: string, callback: (e: number) => void, targetName: string) => void
  }
  list: {
    getHistoryPath: () => string
    goHistory: (path: string) => void
    getSelected: () => IItem[]
    getCurrentList: () => IItem[]
  }
  getList: () => {
    cache: {
      getCacheConfig: () => void
      getCacheData: (
        number: -1 | -2,
        callback: (list: IItem[], loadingTip: boolean, cache: any, r: any) => void
      ) => void
      key: string
    }
    loadInitData: () => void
    loadMoreData: () => void
  }
  listInit: {
    getCheckedIndexs: () => number[]
    getCheckedItems: () => IItem[]
  }
  listInstance: {
    cancelFilesSelect: () => void
  }
  message: {
    listen: (mode: 'ViewPanelChanged', callback: (called: boolean) => void) => void
  }
  router: {
    emit: (v1: 'eachEnter', v2: 'list') => void
  }
  ui: {
    tip: (option: { mode: 'loading'; msg: string; autoClose: boolean }) => void
    hideTip: () => void
  }
  user: {
    LRURPVSDB: null
    XDUSS: 'null'
    activity_end_time: number
    add_friend_small_flow: number
    applystatus: null
    bdstoken: null
    bt_paths: null
    cfrom_id: string
    ctime: number
    curr_activity_code: number
    description: string
    errortype: null
    expiredType: number
    face_status: null
    file_list: { errno: 0; list: [] }
    flag: number
    followFlag: number
    hit_ogc: boolean
    is_auto_svip: 0 | 1
    is_evip: 0 | 1
    is_master_svip: 0 | 1
    is_master_vip: 0 | 1
    is_svip: 0 | 1
    is_vip: 0 | 1
    is_year_vip: 0 | 1
    linkusername: string
    loginstate: 0 | 1
    need_tips: null
    novelid: boolean
    openlogo: null
    openyy: null
    pansuk: string
    photo: string
    public: 0 | 1
    sampling: boolean
    self: boolean // determine that share file is belong to current user or not
    share_page_type: 'multi'
    shareid: number
    sharesuk: string
    show_vip_ad: null
    sign: string
    sign1: null
    sign2: null
    sign3: null
    srv_ts: null
    task_key: null
    task_time: null
    third: 0 | 1
    timeline_status: null
    timestamp: number
    title_img: null
    uk: number
    unlogin_user_in_small_flow: 0 | 1
    urlparam: []
    username: string
    vip_end_time: null
    visitor_avatar: null
    visitor_uk: null
  }
  dlinkService: {
    getDlinkPan: (fsidListStringfy: string, type: 'batch' | 'nolimit', callback: Function) => void
    getDlinkShare: (data: object, callback: Function) => void
  }

  cookie: {
    getCookie: (v: string) => string
    setCookie: (v: string) => void
  }
}

export interface IDlinkPanResponse {
  errno: number
  request_id: number
  dlink: {
    fs_id: IItem['fs_id']
    dlink: string
    link: string | undefined
  }[]
}
