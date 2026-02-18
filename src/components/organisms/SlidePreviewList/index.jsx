import styled from 'styled-components'

import SlideContainer from '../../atoms/SlideContainer'
import Slide from '../../molecules/Slide'

const Wrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  height: ${props => props.$height}px;
  white-space: nowrap;
`

const SlidePreview = styled.div`
  display: inline-block;
  white-space: normal;
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

const SlidePreviewList = ({ slide, onPressNewSlide, onPressSlide, height = 200 }) => (
  <Wrapper $height={height}>
    {slide.pages.map((page, index) => (
      <SlidePreview key={`slide-preview-${index}`}>
        <SlideContainer focus={index === slide.current}>
          <Slide
            content={page.content}
            styleText={page.style}
            onClick={() => onPressSlide(index)}
          />
        </SlideContainer>
      </SlidePreview>
    ))}
    <SlidePreview>
      <SlideContainer>
        <NewSlideButton onClick={onPressNewSlide} type="button">+</NewSlideButton>
      </SlideContainer>
    </SlidePreview>
  </Wrapper>
)

export default SlidePreviewList
