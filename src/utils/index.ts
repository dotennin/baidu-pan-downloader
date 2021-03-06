/**
 * Wrapped console.log function.
 *
 * @export
 * @param {*} args
 */
export function log(...args: any[]) {
  console.log('Userscript (React Mode):', ...args)
}

/**
 * Awaits for an element with the specified `selector` to be found
 * and then returns the selected dom node.
 * This is used to delay rendering a widget until its parent appears.
 *
 * @export
 * @param {string} selector
 * @returns {DOMNode}
 */
export async function awaitElement(selector: Parameters<typeof document.querySelector>[0]) {
  const MAX_TRIES = 60
  let tries = 0
  return new Promise((resolve, reject) => {
    function probe() {
      tries++
      return document.querySelector(selector)
    }

    function delayedProbe() {
      if (tries >= MAX_TRIES) {
        log("Can't find element with selector", selector)
        reject()
        return
      }
      const elm = probe()
      if (elm) {
        resolve(elm)
        return
      }

      window.setTimeout(delayedProbe, 250)
    }

    delayedProbe()
  })
}

/**
 * Ensure `callback` is called every time window.location changes
 * Code derived from https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
 *
 * @export
 * @param {function} callback - function to be called when URL changes
 * @returns {MutationObserver} - MutationObserver that watches the URL
 */
export function addLocationChangeCallback(callback: Function) {
  // Run the callback once right at the start
  window.setTimeout(callback, 0)

  // Set up a `MutationObserver` to watch for changes in the URL
  let oldHref = window.location.href
  const observer = new MutationObserver((mutations) => {
    if (mutations.some(() => oldHref !== document.location.href)) {
      oldHref = document.location.href
      callback()
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
  return observer
}

export const getFileExtension = (fileName: string) => {
  return fileName.substring(fileName.lastIndexOf('.') + 1).toLocaleLowerCase()
}

export const getLocation = () => {
  return {
    inDiskScreen: /(?<=pan|yun).baidu.com\/disk/.test(window.location.href),
    inSharePwdScreen: /(?<=pan|yun).baidu.com\/share/.test(window.location.href),
    inShareScreen: /(?<=pan|yun).baidu.com\/s/.test(window.location.href),
  }
}

export function downloadURI(uri: string, name: string) {
  const link = document.createElement('a')
  link.download = name
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function postOpen(url: string, body: object) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = url
  form.target = 'new_window'
  Object.keys(body).forEach((key) => {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = body[key as keyof typeof body]
    form.appendChild(input)
  })
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}
