import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SlideContainer from '../../atoms/SlideContainer'
import Slide from '../../molecules/Slide'

const Wrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: ${ props => props.height }px;
`

const SlidePreview = styled.div`
  display: inline-block;
  height: 100%;
  width: 266px;
  position: relative;
`

const NewSlideButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 900;
  font-size: 96pt;
`

const renderSlidePreview = (page, index, props) => (
  <SlidePreview key={`slide-preview-${index}`}>
    <SlideContainer focus={index === props.slide.current}>
      <Slide content={page.content}
             styleText={page.style}
             onClick={() => props.onPressSlide(index)}/>
    </SlideContainer>
  </SlidePreview>
)

const SlidePreviewList = (props) => (
  <Wrapper height={props.height}>
    {props.slide.pages.map((page, index) => renderSlidePreview(page, index, props))}
    <SlidePreview>
      <SlideContainer>
        <NewSlideButton onClick={props.onPressNewSlide} type="button">+</NewSlideButton>
      </SlideContainer>
    </SlidePreview>
  </Wrapper>
)

SlidePreviewList.propTypes = {
  height: PropTypes.number,
  onPressNewSlide: PropTypes.func.isRequired,
}

SlidePreviewList.defaultProps = {
  height: 200
}

export default SlidePreviewList
