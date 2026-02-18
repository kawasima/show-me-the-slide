import React from 'react'
import { storiesOf } from '@storybook/react'
import { action, configureActions } from '@storybook/addon-actions'
import styled from 'styled-components'

import SlideKeyOperationContainer from './'

const Wrapper = styled.div`
`

storiesOf('Atoms|SlideKeyOperationContainer', module)
  .add('default', () => (
    <Wrapper>
      <SlideKeyOperationContainer
        onPressEscape={action('Press Escape')}
        onPressArrowLeft={action('Press Arrow Left')}
        onPressArrowRight={action('Press Arrow Right')}
        onPressF5={action('Press F5')}
        >
        <div>
          <ul>
            <li>Escape</li>
            <li>←</li>
            <li>→</li>
            <li>F5</li>
          </ul>
        </div>
      </SlideKeyOperationContainer>
    </Wrapper>
  ))
