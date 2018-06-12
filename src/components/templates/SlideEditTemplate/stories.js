/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import SlideEditTemplate from './'

const Wrapper = styled.div`
`

const slide = {
  pages: ['#page1', '#page2'],
  current: 0,
}

storiesOf('Templates|SlideEditTemplate', module)
  .add('default', () => (
    <Wrapper>
      <SlideEditTemplate slide={slide}/>
    </Wrapper>
  ))
