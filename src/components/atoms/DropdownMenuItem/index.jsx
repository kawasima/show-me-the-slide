import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  z-index: 10;
  width: 150px;
  border: 1px solid #ccc;
`

const DropdownMenuItem = (props) => {
  switch(props.type) {
  case 'link':
    return (<Wrapper><Link to={props.href}>{props.label}</Link></Wrapper>)
  case 'header':
    return (<Wrapper><h6>{props.label}</h6></Wrapper>)
  default:
    return null
  }
}

export default DropdownMenuItem
