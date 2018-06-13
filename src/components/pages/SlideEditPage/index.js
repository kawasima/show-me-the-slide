import React from 'react'
import { connect } from 'react-redux'
import Actions from '../../../actions/slide-actions'

import SlideEditTemplate from '../../templates/SlideEditTemplate'

const SlideEditPage = (props) => (<SlideEditTemplate {...props} />)

const connector = connect(
  s => s,
  dispatch => (
    {
      onUpdatePage: (pageNumber, content) => {
        dispatch(Actions.uiUpdatePage({
          current: pageNumber,
          page: content,
        }))
      },
      onPressF5: () => dispatch(Actions.uiStartSlideShow()),
      onPressNewSlide: () => dispatch(Actions.uiAddPage({})),
      onPressSlide: (index) => dispatch(Actions.uiSelectPage({current: index})),
    }
  )
)

export default connector(SlideEditPage)
