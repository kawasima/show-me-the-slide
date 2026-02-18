import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { action, configureActions } from '@storybook/addon-actions'

import NavigationHeader from './'

const Wrapper = styled.div`
`

storiesOf('Molecules|NavigationHeader', module)
  .add('default', () => (
    <Wrapper>
      <NavigationHeader
        onPressExportButton={() => action('press export button')}
        onPressDeleteButton={() => action('press delete button')}
        onPressDoneButton={() => action('press done button')}
        />
    </Wrapper>
  ))
