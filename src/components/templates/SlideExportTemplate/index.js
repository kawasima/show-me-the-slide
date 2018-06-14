import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextInput } from 'react-native-web'
import NavigationHeader from '../../molecules/NavigationHeader'

const Wrapper = styled.div`
  width: inherit;
  height: inherit;

  textarea {
    width: 100vw;
    height: 100vh;
  }
`

const SlideExportTemplate = (props) => (
  <Wrapper>
    <NavigationHeader {...props} showDoneButton={true} showExportButton={false}/>
    <TextInput multiline={true} editable={false} value={props.slide.pages.join('\n----\n')}/>
  </Wrapper>
)

SlideExportTemplate.propTypes = {
}

export default SlideExportTemplate
