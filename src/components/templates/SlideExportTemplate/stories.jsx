import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import SlideExportTemplate from './'

const Wrapper = styled.div`
`
const defaultProps = {
  slide: {
    pages: ["aaa"],
    current: 0
  }
}

storiesOf('Templates|SlideExportTemplate', module)
  .add('default', () => (
    <Wrapper>
      <SlideExportTemplate {...defaultProps}/>
    </Wrapper>
  ))
