import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { downloadState } from './index'
import { ItemProxy } from '../../Item'

const actionCreator = {
  change: createAsyncAction(
    'DOWNLOAD_CHANGE_REQUEST',
    'DOWNLOAD_CHANGE_SUCCESS',
    'DOWNLOAD_CHANGE_FAILURE',
    'DOWNLOAD_CHANGE_CANCEL'
  )<Partial<typeof downloadState>, Partial<typeof downloadState>, Error, never>(),
  updateItem: createStandardAction('DOWNLOAD_UPDATE_ITEM')<ItemProxy>(),
  reset: createStandardAction('DOWNLOAD_RESET')(),
  downloadURL: createAsyncAction(
    'DOWNLOAD_URL_REQUEST',
    'DOWNLOAD_URL_SUCCESS',
    'DOWNLOAD_URL_FAILURE',
    'DOWNLOAD_URL_CANCEL'
  )<ItemProxy, ItemProxy, Error, never>(),
  downloadItem: createAsyncAction(
    'DOWNLOAD_ITEM_REQUEST',
    'DOWNLOAD_ITEM_SUCCESS',
    'DOWNLOAD_ITEM_FAILURE',
    'DOWNLOAD_ITEM_CANCEL'
  )<ItemProxy, any, Error, never>(),
}

export default actionCreator
