import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from 'react-native-web'
import DropdownMenu from '../../molecules/DropdownMenu'

const Wrapper = styled.nav`
  display:flex;
  padding-left: 10px;
  padding-top: 2px;
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

const RightItem = styled.div`
  display:flex;
  margin-left: auto!important;
`

const items = [
  { type: 'link', label: 'save', href: '/admin/'},
]

const NavigationHeader = (props) => (
  <Wrapper>
    <Button title="Save" onPress={e => console.log('press')}/>
    <RightItem>
      <DropdownMenu items={items}>
        <DropdownButton>
        </DropdownButton>
      </DropdownMenu>
    </RightItem>
  </Wrapper>
)
export default NavigationHeader
