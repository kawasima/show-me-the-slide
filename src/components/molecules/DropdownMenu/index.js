import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuidv4 from 'uuid/v4'

import DropdownMenuItem from '../../atoms/DropdownMenuItem'

const Wrapper = styled.div`
  position: relative;
`

const Menu = styled.div`
  position: absolute;
  right: 0;
`


class DropdownMenu extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    const { items } = this.props
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      onClick: () => {
        this.setState({isOpen: !this.state.isOpen })
        console.log(this.state)
      }
    }))
    return (
      <div>
        {children}
        <Menu>
          { this.state.isOpen && items.map(item => <DropdownMenuItem key={uuidv4()} {...item} />) }
        </Menu>
      </div>
    )
  }
}

export default DropdownMenu
