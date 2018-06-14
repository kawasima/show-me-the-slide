import React from 'react'
import { connect } from 'react-redux'
import Actions from '../../../actions/slide-actions'

import SlideExportTemplate from '../../templates/SlideExportTemplate'

const SlideExportPage = (props) => (<SlideExportTemplate {...props} />)

const connector = connect(
  s => s,
  dispatch => (
    {
      onPressDoneButton: () => dispatch(Actions.uiReturnToTop()),
    }
  )
)

export default connector(SlideExportPage)
