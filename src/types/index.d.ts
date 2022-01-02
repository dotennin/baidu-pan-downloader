interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
  ZIP: (underlyingSource: {
    start?: (arg0: { enqueue(fileLike: any): void; close(): void }) => any
    pull: (arg0: { enqueue(fileLike: any): void; close(): void }) => any
  }) => any
  yunData: {
    skinName: string
    neglect: number

    /** @deprecated **/
    CURRACTIVITYCODE: string
    /** @deprecated **/
    HITOGC: false
    /** @deprecated **/
    ISFIRST: undefined
    /** @deprecated **/
    ISSVIP: 0 | 1 | 2
    /** @deprecated **/
    ISVIP: 0 | 1
    /** @deprecated **/
    ISYEARVIP: 0 | 1
    /** @deprecated **/
    LOGINSTATUS: 0 | 1
    /** @deprecated **/
    MYAVATAR: string
    /** @deprecated **/
    MYBDSTOKEN: string
    /** @deprecated **/
    MYBDUSS: string
    /** @deprecated **/
    MYNAME: string
    /** @deprecated **/
    MYUK: number
    /** @deprecated **/
    QUOTAINFOS: { total: number; used: number }
    /** @deprecated **/
    SERVERTIME: number
    /** @deprecated **/
    SHOWVIPAD: number
    /** @deprecated **/
    UINFO: undefined
    /** @deprecated **/
    VIPENDTIME: number
    /** @deprecated **/
    activity_end_time: string
    /** @deprecated **/
    activity_status: 0 | 1
    /** @deprecated **/
    faceStatus: 0 | 1
    /** @deprecated **/
    pansuk: string
    /** @deprecated **/
    product: string
    /** @deprecated **/
    sampling: string
    /** @deprecated **/
    sharedir: 0 | 1
    /** @deprecated **/
    sign1: string
    /** @deprecated **/
    sign2: string
    /** @deprecated **/
    sign3: string
    /** @deprecated **/
    sign4: string
    /** @deprecated **/
    sign5: string
    /** @deprecated **/
    source_entry_tip_message: string
    /** @deprecated **/
    task_key: string
    /** @deprecated **/
    task_time: 1595692823
    /** @deprecated **/
    timestamp: 1595692823
    /** @deprecated **/
    token: string
    /** @deprecated **/
    volAutoup: string
    /** @deprecated **/
    wpsauth: boolean
    /** @deprecated **/
    wpssamping: boolean
    /** @deprecated **/
    vsCode: string
    /** @deprecated **/
    SHARE_UK: string
    /** @deprecated **/
    SHARE_ID: string
    /** @deprecated **/
    SIGN: string
    /** @deprecated **/
    TIMESTAMP: number
  }
  locals: {
    product: 'pan'
    hasLaunched: boolean
    events: []
    setProduct: Function
    get: (key: LocalsKeys) => LocalsValue
    set: (key: LocalsKeys, value: LocalsValue) => void
    dump: () => Record<LocalsKeys, { value: LocalsValue; status: 1 | -1; inWaiting: [] }>
  }
  require: {
    (property: string): any
    async: (name: string, callback: Function) => void
    resourceMap: Function
    alias: Function
    loadCss: Function
  }
}

type LocalsValue = number | string | [] | object
type LocalsKeys =
  | 'is_svip'
  | 'is_vip'
  | 'username'
  | 'photo'
  | 'loginstate'
  | 'vip_level'
  | 'uk'
  | 'servertime'
  | 'csrf'
  | 'bdstoken'
  | 'skinName'
  | 'is_evip'
  | 'now'
  | 'XDUSS'
  | 'curr_activity_code'
  | 'show_vip_ad'
  | 'isdocuser'
  | 'docswitch'
  | 'sampling'
  | 'quota'
  | 'sign'
  | 'SIGN'
  | 'shareid'
  | 'surl'

declare const unsafeWindow: Window

declare module '*.svg' {
  const content: string
  export default content
}

declare type PromiseReturnType<F> = ReturnType<F> extends Promise<infer T> ? T : never
