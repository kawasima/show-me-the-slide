import { useRef } from 'react'
import styled from 'styled-components'

import SlideContainer from '../../atoms/SlideContainer'
import Slide from '../../molecules/Slide'
import NavigationHeader from '../../molecules/NavigationHeader'

const Wrapper = styled.div`
  div.content {
    flex: 1;
  }
`

const SlideList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 800px;
  height: ${props => props.$size * 600}px;
`

const Page = styled.div`
  flex: 1;
`

const SlidePrintTemplate = (props) => {
  const dom = useRef(null)
  return (
    <Wrapper>
      <NavigationHeader {...props} printElement={dom} />
      <SlideList ref={dom} $size={props.slide.pages.length}>
        {props.slide.pages.map((page, index) => (
          <Page key={`page-${index}`}>
            <SlideContainer>
              <Slide content={page.content} styleText={page.style} />
            </SlideContainer>
          </Page>
        ))}
      </SlideList>
    </Wrapper>
  )
}

export default SlidePrintTemplate
