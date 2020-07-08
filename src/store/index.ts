import { configureStore } from './configureStore'

export const store = configureStore()
export type IStoreState = ReturnType<typeof store.getState>
export const storeSelector = (store: IStoreState) => store
