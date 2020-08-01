interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
  ZIP: (underlyingSource: {
    start?: (arg0: { enqueue(fileLike: any): void; close(): void }) => any
    pull: (arg0: { enqueue(fileLike: any): void; close(): void }) => any
  }) => any
  yunData: {
    CURRACTIVITYCODE: string
    HITOGC: false
    ISFIRST: undefined
    ISSVIP: 0 | 1 | 2
    ISVIP: 0 | 1
    ISYEARVIP: 0 | 1
    LOGINSTATUS: 0 | 1
    MYAVATAR: string
    MYBDSTOKEN: string
    MYBDUSS: string
    MYNAME: string
    MYUK: number
    QUOTAINFOS: { total: number; used: number }
    SERVERTIME: number
    SHOWVIPAD: number
    UINFO: undefined
    VIPENDTIME: number
    activity_end_time: string
    activity_status: 0 | 1
    faceStatus: 0 | 1
    pansuk: string
    product: string
    sampling: string
    sharedir: 0 | 1
    sign1: string
    sign2: string
    sign3: string
    sign4: string
    sign5: string
    skinName: string
    source_entry_tip_message: string
    task_key: string
    task_time: 1595692823
    timestamp: 1595692823
    token: string
    volAutoup: string
    wpsauth: boolean
    wpssamping: boolean
    vsCode: string
    SHARE_UK: string
    SHARE_ID: string
    SIGN: string
    TIMESTAMP: number
  }
  require: {
    (property: string): any
    async: (name: string, callback: Function) => void
    resourceMap: Function
    alias: Function
    loadCss: Function
  }
}

declare const unsafeWindow: Window

declare module '*.svg' {
  const content: string
  export default content
}

declare type PromiseReturnType<F> = ReturnType<F> extends Promise<infer T> ? T : never
declare type PropsTypeFromFC<T extends Function> = Omit<T extends (...args: infer A) => any ? A[0] : never, 'children'>
