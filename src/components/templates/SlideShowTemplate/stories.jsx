import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import SlideShowTemplate from './'

const Wrapper = styled.div`
`

const defaultProps = {
  slide: {
    pages: ["aaa"],
    current: 0
  }
}

storiesOf('Templates|SlideShowTemplate', module)
  .add('default', () => (
    <Wrapper>
      <SlideShowTemplate {...defaultProps}/>
    </Wrapper>
  ))
