import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Prism from 'prismjs'
import ReactMarkdown from 'react-markdown'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
  filter: drop-shadow(3px 3px 1px rgba(0,0,0,0.6));
`

const SlideContent = styled.div`
  ${props => props.center && 'text-align: center;' }
  ${props => props.middle && 'vertical-align: middle;' }
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  padding: 1em 4em 1em 4em;
  font-size: x-large;

  img {
    max-width: 100%;
  }

  ${props => props.styleText}
`

class Slide extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  componentDidUpdate() {
    Prism.highlightAll()
  }

  render() {
    return (
      <Wrapper>
        <SlideContent {...this.props} innerRef={this.dom}>
          <ReactMarkdown
            source={this.props.content} />
        </SlideContent>
      </Wrapper>
    )
  }
}

Slide.propTypes = {
  content: PropTypes.string,
  styleText: PropTypes.string,
  aspectRatio: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
}

Slide.defaultProps = {
  aspectRatio: { x: 4, y: 3 }
}

export default Slide
