interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
  ZIP: (underlyingSource: {
    start?: (arg0: { enqueue(fileLike: any): void; close(): void }) => any
    pull: (arg0: { enqueue(fileLike: any): void; close(): void }) => any
  }) => any
}
