/* global URLSearchParams */
import React from 'react'
import { connect } from 'react-redux'
import Actions from '../../../actions/slide-actions'

import SlideEditTemplate from '../../templates/SlideEditTemplate'

class SlideEditPage extends React.Component {
  constructor(props) {
    super(props)
    const params = new URLSearchParams(props.location.search)
    const content = params.get('content')
    const style = params.get('style')
    if (content || style) {
      props.onSlideLoad(content, style)
    }
  }

  render() {
    return (
      <SlideEditTemplate {...this.props} />
    )
  }
}

const connector = connect(
  s => s,
  dispatch => (
    {
      onUpdatePage: (pageNumber, page) => {
        dispatch(Actions.uiUpdatePage({
          current: pageNumber,
          page,
        }))
      },
      onSlideLoad: (content, style) => dispatch(Actions.uiSlideLoaded({ content, style })),
      onPressF5: () => dispatch(Actions.uiStartSlideShow()),
      onPressNewSlide: () => dispatch(Actions.uiAddPage({ page: { content: '' }})),
      onPressSlide: (index) => dispatch(Actions.uiSelectPage({current: index})),
      onPressExportButton: () => dispatch(Actions.uiExportSlide()),
      onPressDeleteButton: () => dispatch(Actions.uiDeleteAllSlides()),
    }
  )
)

export default connector(SlideEditPage)
