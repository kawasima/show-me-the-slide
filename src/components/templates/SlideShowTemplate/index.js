import React from 'react'
import PropTypes from 'prop-types'
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
  <Wrapper>
    <SlideKeyOperationContainer {...props}>
      <SlideContainer>
        <Slide input={props.slide.pages[props.slide.current]}/>
      </SlideContainer>
    </SlideKeyOperationContainer>
  </Wrapper>
)

SlideShowTemplate.propTypes = {
}

export default SlideShowTemplate
