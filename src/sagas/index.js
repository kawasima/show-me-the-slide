import {
  takeLatest,
  select,
  all,
  call,
  put
} from 'redux-saga/effects'
import axios from 'axios'
import { push } from 'react-router-redux'
import Actions from '../actions/slide-actions'
import csstree from 'css-tree'

function parseStyle(style) {
  const rulesSet = []
  const ast = csstree.parse(style)

  ast.children.forEach(node => {
    if (node.type === 'Rule'
        && node.prelude
        && node.prelude.type === 'SelectorList'
        && node.prelude.children) {
      node.prelude.children.forEach(selector => {
        if (selector.children
            && selector.children.getSize() > 1
            && selector.children.first().type === 'ClassSelector'
            && selector.children.first().name.startsWith('page-')) {
          const pageClass = selector.children.shift().data
          const found = pageClass.name.match(/page-(\d+)/)
          if (found && found.length > 1) {

            const rules = rulesSet[parseInt(found[1])]
            if (rules) {
              rules.push(csstree.generate(node))
            } else {
              rulesSet[parseInt(found[1])] = [csstree.generate(node)]
            }
          }
        }
      })
    }
  })

  return rulesSet.map(rules => rules ? rules.join('\n') : null)
}

export function* loadStyle(url) {
  if (url) {
    const res = yield axios.get(url, {
      responseType: 'text'
    })
    return parseStyle(res.data)
  } else {
    return []
  }
}

export function* loadContent(url) {
  if (url) {
    const res = yield axios.get(url, {
      responseType: 'text'
    })
    return res.data.split(/[\n\r]-{4,}[\n\r]/m)
  } else {
    return [];
  }
}

export function* onSlideLoaded(action) {
  const [contents, styles] = yield all([
    call(loadContent, action.payload.content),
    call(loadStyle,   action.payload.style),
  ])

  const len = Math.max(contents.length, styles.length)
  const pages = Array.from({length: len}, (x,i) => i)
        .map(i => ({ content: contents[i], style: styles[i]}))
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
