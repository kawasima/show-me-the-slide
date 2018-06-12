import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Slide from './'

const Wrapper = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #ccc;
  page-break-after: always;
`

const input = `
# Test

- hoh
- jij
- tet
`

storiesOf('Atoms|Slide', module)
  .add('default', () => (
    <Wrapper>
      <Slide input={input} center={false}/>
    </Wrapper>
  ))
