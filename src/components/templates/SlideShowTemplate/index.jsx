import styled from 'styled-components'

import SlideContainer from '../../atoms/SlideContainer'
import SlideKeyOperationContainer from '../../atoms/SlideKeyOperationContainer'
import Slide from '../../molecules/Slide'

const Wrapper = styled.div`
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: stretch;
  justify-content: center;
`

const SlideShowTemplate = (props) => (
  <SlideKeyOperationContainer {...props}>
    <Wrapper>
      <SlideContainer alignment="center">
        <Slide
          content={props.slide.pages[props.slide.current].content}
          styleText={props.slide.pages[props.slide.current].style}
        />
      </SlideContainer>
    </Wrapper>
  </SlideKeyOperationContainer>
)

export default SlideShowTemplate
