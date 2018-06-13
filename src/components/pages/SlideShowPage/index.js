import React from 'react'
import { connect } from 'react-redux'
import Actions from '../../../actions/slide-actions'

import SlideShowTemplate from '../../templates/SlideShowTemplate'

const SlideShowPage = (props) => (<SlideShowTemplate {...props} />)

const connector = connect(
  s => s,
  dispatch => (
    {
      onPressEscape: () => dispatch(Actions.uiStopSlideShow()),
      onPressArrowRight: () => dispatch(Actions.uiGoToNext()),
      onPressArrowLeft: () => dispatch(Actions.uiGoToPrev()),
    }
  )
)

export default connector(SlideShowPage)
