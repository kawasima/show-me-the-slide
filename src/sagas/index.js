import {
  takeLatest,
  select,
  put
} from 'redux-saga/effects'
import axios from 'axios'
import { push } from 'react-router-redux'
import Actions from '../actions/slide-actions'

export function* onSlideLoaded(action) {
  const res = yield axios.get(action.payload.url, {
    responseType: 'text'
  })
  const contents = res.data.split(/[\n\r]-{4,}[\n\r]/m)
  const pages = contents.map(c => ({ content: c }))
  yield put(Actions.setEntirePages({ pages, current: 0}))
}
export function* onSelectPage(action) {
  yield put(Actions.setCurrentPage(action.payload))
}

export function* onAddPage(action) {
  yield put(Actions.setNewPage(action.payload))
}

export function* onUpdatePage(action) {
  yield put(Actions.setPage(action.payload))
}

export function* onGoToNext() {
  const { pages, current } = yield select((s) => s.slide)
  if (current < pages.length - 1) {
    yield put(Actions.setCurrentPage({ current: current + 1}))
  }
}

export function* onGoToPrev() {
  const { pages, current } = yield select((s) => s.slide)
  if (current > 0) {
    yield put(Actions.setCurrentPage({ current: current - 1}))
  }
}

export function* onStartSlideShow() {
  yield put(push('/show'))
}

export function* onDeleteAllSlides() {
  yield put(Actions.setEntirePages({pages: [{ content: ''}], current: 0}))
}

export function* onExportSlide() {
  yield put(push('/export'))
}

export function* onReturnToTop() {
  yield put(push('/'))
}

export default function* rootSaga() {
  yield takeLatest('UI_EXPORT_SLIDE', onExportSlide)
  yield takeLatest('UI_DELETE_ALL_SLIDES', onDeleteAllSlides)
  yield takeLatest('UI_RETURN_TO_TOP', onReturnToTop)
  yield takeLatest('UI_SLIDE_LOADED', onSlideLoaded)
  yield takeLatest('UI_UPDATE_PAGE', onUpdatePage)
  yield takeLatest('UI_ADD_PAGE', onAddPage)
  yield takeLatest('UI_SELECT_PAGE', onSelectPage)
  yield takeLatest('UI_GO_TO_NEXT', onGoToNext)
  yield takeLatest('UI_GO_TO_PREV', onGoToPrev)
  yield takeLatest('UI_START_SLIDE_SHOW', onStartSlideShow)
  yield takeLatest('UI_STOP_SLIDE_SHOW', onReturnToTop)
}
