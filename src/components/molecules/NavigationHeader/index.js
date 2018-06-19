import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { Button, View, TextInput } from 'react-native-web'
import DropdownMenu from '../../molecules/DropdownMenu'

const Wrapper = styled.nav`
  display:flex;
  width: 100%;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-bottom: 2px;
  box-shadow: 0px 2px 2px #343a40;
  background-color: #343a40!important;
`

const DropdownButton = styled.div`
  cursor: pointer;

  ::after {
    padding-right: .5rem;
    padding-left: .5rem;
    color: #fff;
    line-height: 32px;
    font-size: .5em;
    vertical-align: top;
    display: inline-block;
    content: "\\25BC";
  }
`
const LogoText = styled.h1`
  font-family: 'IM Fell Great Primer';
  position: relative;
  margin: 1px 0;
  color: #f0f0f0;
  ::before {
    content: 'Show me the slide';
    position: absolute;
    left: -.08em;
    top: .08em;
    color: #ccc;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAFUlEQVQIW2NkQAKMIPZ/IGAEAWQZAE5lBATogF4qAAAAAElFTkSuQmCC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const RightItem = styled.div`
  display:flex;
  margin-left: auto!important;
`

const renderDoneButton = (props) => (
  <View style={{ marginLeft: 10}}>
    <Button title="Done" onPress={() => {
        props.onPressDoneButton && props.onPressDoneButton()
      }} />
  </View>
)
const renderExportButton = (props) => (
  <View style={{ marginLeft: 10}}>
    <Button title="Export"
            onPress={() => props.onPressExportButton && props.onPressExportButton() } />
  </View>
)

const renderPrintButton = (props) => (
  <View style={{ marginLeft: 10}}>
    <Button title="Print"
            onPress={() => props.onPressPrintButton && props.onPressPrintButton(props.printElement) } />
  </View>
)

const renderDeleteButton = (props) => (
  <View style={{ marginLeft: 10}}>
    <Button title="Delete All"
            color="#d9534f"
            onPress={() => props.onPressDeleteButton && props.onPressDeleteButton() } />
  </View>
)

const NavigationHeader = (props) => (
  <Wrapper>
    <LogoText>Show me the slide</LogoText>
    <TextInput/>

    <RightItem>
      { props.onPressExportButton && renderExportButton(props) }
      { props.onPressDeleteButton && renderDeleteButton(props) }
      { props.onPressPrintButton && renderPrintButton(props) }
      { props.onPressDoneButton && renderDoneButton(props) }
    </RightItem>
  </Wrapper>
)

NavigationHeader.propTypes = {
  printElement: PropTypes.element,
  onPressDoneButton: PropTypes.func,
  onPressExportButton: PropTypes.func,
  onPressPressButton: PropTypes.func,
  onPressDeleteButton: PropTypes.func,
}

export default NavigationHeader
