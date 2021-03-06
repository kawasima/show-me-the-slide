import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: inherit;
`

class SlideKeyOperationContainer extends React.Component {
  handleKeyDown = e => {
    switch(e.key) {
    case 'Escape':
      e.preventDefault()
      this.props.onPressEscape && this.props.onPressEscape()
      break
    case 'ArrowRight':
    case 'Right': // <- for Edge
      this.props.onPressArrowRight && this.props.onPressArrowRight()
      break
    case 'ArrowLeft':
    case 'Left': // <- for Edge
      this.props.onPressArrowLeft && this.props.onPressArrowLeft()
      break
    case 'F5':
      e.preventDefault()
      this.props.onPressF5 && this.props.onPressF5()
      break
    }
  }

  constructor(props) {
    super(props)
    this.state = { handleKeyDown: this.handleKeyDown.bind(this) }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.state.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.state.handleKeyDown)
  }

  render() {
    return (<Wrapper>{this.props.children}</Wrapper>)
  }
}

SlideKeyOperationContainer.propTypes = {
  onPressF5: PropTypes.func,
  onPressArrowRight: PropTypes.func,
  onPressArrowLeft: PropTypes.func,
  onPressEscape: PropTypes.func,
}

export default SlideKeyOperationContainer
