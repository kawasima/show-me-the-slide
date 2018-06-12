import {
  takeLatest,
  put
} from 'redux-saga/effects'

import Actions from '../actions/slide-actions'

export function* onSelectPage(action) {
  yield put(Actions.setCurrentPage(action.payload))
}

export function* onAddPage(action) {
  yield put(Actions.setNewPage(action.payload))
}

export function* onUpdatePage(action) {
  yield put(Actions.setPage(action.payload))
}

export default function* rootSaga() {
  yield takeLatest('UI_UPDATE_PAGE', onUpdatePage)
  yield takeLatest('UI_ADD_PAGE', onAddPage)
  yield takeLatest('UI_SELECT_PAGE', onSelectPage)
}
