import { useState, Children, cloneElement } from 'react'
import styled from 'styled-components'

import DropdownMenuItem from '../../atoms/DropdownMenuItem'

const Menu = styled.div`
  position: absolute;
  right: 0;
`

const DropdownMenu = ({ items, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggledChildren = Children.map(children, child =>
    cloneElement(child, {
      onClick: () => setIsOpen(prev => !prev),
    })
  )

  return (
    <div>
      {toggledChildren}
      <Menu>
        {isOpen && items.map((item, i) => (
          <DropdownMenuItem key={`${item.type}-${item.label}-${i}`} {...item} />
        ))}
      </Menu>
    </div>
  )
}

export default DropdownMenu
