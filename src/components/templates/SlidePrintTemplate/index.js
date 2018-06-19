import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SlideContainer from '../../atoms/SlideContainer'
import Slide from '../../molecules/Slide'
import NavigationHeader from '../../molecules/NavigationHeader'

const Wrapper = styled.div`
  div {
  }
  div.content {
    flex: 1;
  }
`

const SlideList = styled.div`
  display: flex;
  min-width: 100%
  max-width: 100%;
  flex-direction: column;
  height: ${props => props.size * 600}px;
`

const Page = styled.div`
  flex: 1;
  width: 100%;
`

const renderSlide = (page, index) => (
  <Page key={`page-${index}`}>
    <SlideContainer>
      <Slide content={page.content}
             styleText={page.style}/>
    </SlideContainer>
    <div className="html2pdf__page-break"></div>
  </Page>
)


const SlidePrintTemplate = (props) => {
  let dom = React.createRef()
  return (
    <Wrapper>
      <NavigationHeader {...props} printElement={dom}/>
      <SlideList innerRef={dom} size={props.slide.pages.length}>
        {props.slide.pages.map((page, index) => renderSlide(page, index, props))}
      </SlideList>
    </Wrapper>
  )
}

SlidePrintTemplate.propTypes = {
}

export default SlidePrintTemplate
