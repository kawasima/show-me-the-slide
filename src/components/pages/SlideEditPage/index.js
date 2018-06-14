import React from 'react'
import { connect } from 'react-redux'
import Actions from '../../../actions/slide-actions'

import SlideEditTemplate from '../../templates/SlideEditTemplate'

class SlideEditPage extends React.Component {
  constructor(props) {
    super(props)
    const params = new URLSearchParams(props.location.search)
    const url = params.get('url')
    if (url) {
      props.onSlideLoad(url)
    }
  }

  render() {
    return (<SlideEditTemplate {...this.props} />)
  }
}

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
      onSlideLoad: url => dispatch(Actions.uiSlideLoaded({ url })),
      onPressF5: () => dispatch(Actions.uiStartSlideShow()),
      onPressNewSlide: () => dispatch(Actions.uiAddPage({})),
      onPressSlide: (index) => dispatch(Actions.uiSelectPage({current: index})),
      onPressExportButton: () => dispatch(Actions.uiExportSlide()),
    }
  )
)

export default connector(SlideEditPage)
