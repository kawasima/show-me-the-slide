import { handleActions } from 'redux-actions'
import Actions from '../actions/slide-actions'

const initialState = {
  pages: [''],
  current: 0,
}

export default handleActions({
  [Actions.setNewPage]: (state, action) => (
    { ...state, pages: [...state.pages, action.payload.page]}
  ),
  [Actions.setPage]: (state, action) => (
    {
      ...state,
      pages: state.pages.map((p, i) => {
        if (state.current === i) {
          return action.payload.page
        } else {
          return p
        }
      })
    }
  ),
  [Actions.setEntirePages]: (state, action) => (
    { ...action.payload }
  ),
  [Actions.setCurrentPage]: (state, action) => (
    { ...state, current: action.payload.current }
  )
}, initialState)
