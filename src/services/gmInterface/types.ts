/* eslint-disable @typescript-eslint/no-explicit-any */
export type Char =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'

/**
 * Otherwise the new tab is just appended. loadInBackground has the opposite meaning of active and was added to achieve Greasemonkey 3.x compatibility. If neither active nor loadInBackground is given, then the tab will not be focused. This function returns an object with the function close, the listener onclosed and a flag called closed.
 */
export interface IOpenInTabOption {
  // decides whether the new tab should be focused,
  active: boolean

  // that inserts the new tab after the current one,
  insert: boolean

  // // makes the browser re-focus the current tab on close and
  setParent: boolean

  // makes the tab being opened inside a incognito mode/private mode window.
  incognito: boolean
}

export interface IXMLHttpRequestDetail {
  // one of GET, HEAD, POST
  method?: 'GET' | 'HEAD' | 'POST'

  // the destination URL
  url: string

  // ie. user-agent, referer, ... (some special headers are not supported by Safari and Android browsers)
  headers?: HeadersInit

  // some string to send via a POST request
  data?: any

  //  a cookie to be patched into the sent cookie set
  cookie?: string

  // send the data string in binary mode
  binary?: boolean

  //  don't cache the resource
  nocache?: boolean

  // revalidate maybe cached content
  revalidate?: boolean | Date

  // a timeout in ms
  timeout?: number

  // a property which will be added to the response object
  context?: any

  // one of arraybuffer, blob, json
  responseType?: 'arraybuffer' | 'blob' | 'json'

  //  a MIME type for the request
  overrideMimeType?: MimeType

  //  don't send cookies with the requests (please see the fetch notes)
  anonymous?: boolean

  //  (beta) use a fetch instead of a xhr request
  // (at Chrome this causes xhr.abort, details.timeout and xhr.onprogress to not work and makes xhr.onreadystatechange receive only readyState 4 events)
  fetch?: boolean

  // a username for authentication
  username?: string

  // a password
  password?: string

  // callback to be executed if the request was aborted
  onabort?: (e: ProgressEvent) => void

  // callback to be executed if the request ended up with an error
  onerror?: XMLHttpRequestEventTarget['onerror']

  // callback to be executed if the request started to load
  onloadstart?: XMLHttpRequestEventTarget['onloadstart']

  // callback to be executed if the request made some progress
  onprogress?: XMLHttpRequestEventTarget['onprogress']

  // callback to be executed if the request's ready state changed
  onreadystatechange?: (e: Event) => void

  // callback to be executed if the request failed due to a timeout
  ontimeout?: XMLHttpRequestEventTarget['ontimeout']

  // callback to be executed if the request was loaded.
  onload?: (e: {
    // the final URL after all redirects from where the data was loaded
    finalUrl: string

    // the ready state
    readyState: 1 | 2 | 3 | 4

    // the request status
    status: number

    // the request status text
    statusText: string

    // the request response headers
    responseHeaders: string

    // the response data as object if details.responseType was set
    response: any

    // the response data as XML document
    responseXML: XMLDocument

    // the response data as plain string
    responseText: string
  }) => void
}

export interface IDownloadDetail {
  // the URL from where the data should be downloaded (required)
  url: string

  // the filename - for security reasons the file extension needs to be whitelisted at Tampermonkey's options page (required)
  name?: string

  // - see GM_xmlhttpRequest for more details
  headers?: HeadersInit

  // boolean value, show a saveAs dialog
  saveAs?: boolean

  // callback to be executed if this download ended up with an error
  onerror?: (e: {
    error: 'not_enabled' | 'not_whitelisted' | 'not_permitted' | 'not_supported ' | 'not_succeeded'
    details: any
  }) => void

  // callback to be executed if this download finished
  onload?: IXMLHttpRequestDetail['onload']

  // callback to be executed if this download made some progress
  onprogress?: IXMLHttpRequestDetail['onprogress']

  // callback to be executed if this download failed due to a timeout}
  ontimeout?: IXMLHttpRequestDetail['ontimeout']
}

export interface INotification {
  // the text of the notification (required unless highlight is set)
  text: string

  // the notificaton title
  title?: string

  // the image
  image?: string

  // a boolean flag whether to highlight the tab that sends the notfication (required unless text is set)
  highlight?: boolean

  // a boolean flag whether to not play a sound
  silent?: boolean

  // the time after that the notification will be hidden (0 = disabled)
  timeout?: number

  // called when the notification is closed (no matter if this was triggered by a timeout or a click) or the tab was highlighted
  ondone?: Function

  // called in case the user clicks the notification
  onclick?: Function
}
