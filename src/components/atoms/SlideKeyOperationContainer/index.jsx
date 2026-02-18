import { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: inherit;
`

const SlideKeyOperationContainer = ({
  onPressF5,
  onPressArrowRight,
  onPressArrowLeft,
  onPressEscape,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          onPressEscape?.()
          break
        case 'ArrowRight':
          onPressArrowRight?.()
          break
        case 'ArrowLeft':
          onPressArrowLeft?.()
          break
        case 'F5':
          e.preventDefault()
          onPressF5?.()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onPressF5, onPressArrowRight, onPressArrowLeft, onPressEscape])

  return <Wrapper>{children}</Wrapper>
}

export default SlideKeyOperationContainer
