import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import SlidePreviewList from './'

const Wrapper = styled.div`
`

const pages = [
  `# page1`,
  `# page2`,
  `# page3`,
  `# page4`,
  `# page5`,
  `# page6`,
  `# page7`,
]

storiesOf('Organisms|SlidePreviewList', module)
  .add('default', () => (
    <Wrapper>
      <SlidePreviewList pages={pages}/>
    </Wrapper>
  ))
