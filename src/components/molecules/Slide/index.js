import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Prism from 'prismjs'
import ReactMarkdown from 'react-markdown'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: table;
  table-layout: fixed;
  border: 1px solid #ccc;
  filter: drop-shadow(3px 3px 1px rgba(0,0,0,0.6));
`

const SlideContent = styled.div`
  ${props => props.center && 'text-align: center;' }
  ${props => props.middle && 'vertical-align: middle;' }
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  display: table-cell;
  padding: 1em 4em 1em 4em;
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
            source={this.props.input} />
        </SlideContent>
      </Wrapper>
    )
  }
}

Slide.propTypes = {
  input: PropTypes.string,
  aspectRatio: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
}

Slide.defaultProps = {
  aspectRatio: { x: 4, y: 3 }
}

export default Slide
