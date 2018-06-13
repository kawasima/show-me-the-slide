import {
  takeLatest,
  select,
  put
} from 'redux-saga/effects'

import { push } from 'react-router-redux'
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

export function* onGoToNext(action) {
  const { pages, current } = yield select((s) => s.slide)
  if (current < pages.length) {
    yield put(Actions.setCurrentPage({ current: current + 1}))
  }
}

export function* onGoToPrev(action) {
  const { pages, current } = yield select((s) => s.slide)
  if (current > 0) {
    yield put(Actions.setCurrentPage({ current: current - 1}))
  }
}

export function* onStartSlideShow(action) {
  yield put(push('/show'))
}

export function* onStopSlideShow(action) {
  yield put(push('/'))
}

export default function* rootSaga() {
  yield takeLatest('UI_UPDATE_PAGE', onUpdatePage)
  yield takeLatest('UI_ADD_PAGE', onAddPage)
  yield takeLatest('UI_SELECT_PAGE', onSelectPage)
  yield takeLatest('UI_GO_TO_NEXT', onGoToNext)
  yield takeLatest('UI_GO_TO_PREV', onGoToPrev)
  yield takeLatest('UI_START_SLIDE_SHOW', onStartSlideShow)
  yield takeLatest('UI_STOP_SLIDE_SHOW', onStopSlideShow)
}
