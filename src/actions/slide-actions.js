import { createActions } from 'redux-actions'

export default createActions(
  'UI_SLIDE_LOADED',
  'UI_EXPORT_SLIDE',
  'UI_RETURN_TO_TOP',
  'UI_UPDATE_PAGE',
  'UI_ADD_PAGE',
  'UI_SELECT_PAGE',
  'UI_GO_TO_NEXT',
  'UI_GO_TO_PREV',
  'UI_START_SLIDE_SHOW',
  'UI_STOP_SLIDE_SHOW',

  'SET_ENTIRE_PAGES',
  'SET_NEW_PAGE',
  'SET_PAGE',
  'SET_CURRENT_PAGE',
)
