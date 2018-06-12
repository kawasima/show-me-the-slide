/* global window */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ASPECT_RATIO = {
  '4:3':  { width: 800,  height: 600 },
  '16:9': { width: 1280, height: 960 },
}

const Wrapper = styled.div`
  position: absolute;
  transform-origin: top left;
  transform: scale(${props => props.scale});
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  box-shadow: ${props => props.focus ? '5px 5px rgba(255,0,0,0.6) inset' : '1px 1px rgba(0,0,0,0.6) inset'}
`

class SlideContainer extends React.Component {
  state = {
    scale: 1.0
  }

  getCurrentSize() {
    const { aspectRatio } = this.props
    const { scale } = this.state
    const ratio = ASPECT_RATIO[aspectRatio] || ASPECT_RATIO['4:3']
    return {
      width:  Math.floor(ratio.width  * scale),
      height: Math.floor(ratio.height * scale),
    }
  }

  updateWidth = () => {
    if (!this.el) return
    const currentSize = this.getCurrentSize()
    const width = this.el.clientWidth
    const height = this.el.clientHeight
    let scale = 0
    const ratio = ASPECT_RATIO[this.props.aspectRatio] || ASPECT_RATIO['4:3']

    if (currentSize.width !== width) {
      scale = width / ratio.width
    }
    if (currentSize.height !== height) {
      scale = (scale === 0) ? height/ratio.height : Math.min(scale, height / ratio.height)
    }

    if (scale != 0) {
      this.setState({ scale })
    }
  }

  constructor(props) {
    super(props)
    this.el = null
    window.addEventListener('resize', () => this.updateWidth())
  }

  componentDidMount() {
    this.updateWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateWidth())
  }

  render() {
    const ratio = ASPECT_RATIO[this.props.aspectRatio] || ASPECT_RATIO['4:3']
    return (
      <Wrapper scale={this.state.scale}
               width={ratio.width}
               height={ratio.height}
               focus={this.props.focus}
               innerRef={el => {if (el) { this.el = el.parentNode}}}>
        {this.props.children}
      </Wrapper>
    )
  }

  static propTypes = {
    aspectRatio: PropTypes.string,
    focus: PropTypes.bool
  }

  static defaultProps = {
    aspectRatio: '4:3',
    focus: false
  }
}

export default SlideContainer
