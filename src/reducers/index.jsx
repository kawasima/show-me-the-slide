import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import slide from './slide-reducer'

export default combineReducers({
  slide,
  routing: routerReducer
})
