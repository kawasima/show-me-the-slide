import { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'

const ASPECT_RATIO = {
  '4:3':  { width: 800,  height: 600 },
  '16:9': { width: 1280, height: 960 },
}

const Wrapper = styled.div`
  position: absolute;
  align-self: flex-start;
  transform-origin: top ${props => props.$alignment};
  transform: scale(${props => props.$scale});
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
  box-shadow: ${props => props.$focus ? '5px 5px rgba(255,0,0,0.6) inset' : '1px 1px rgba(0,0,0,0.6) inset'}
`

const SlideContainer = ({ aspectRatio = '4:3', alignment = 'left', focus = false, children }) => {
  const [scale, setScale] = useState(1.0)
  const parentRef = useRef(null)
  const scaleRef = useRef(scale)
  scaleRef.current = scale

  const ratio = ASPECT_RATIO[aspectRatio] || ASPECT_RATIO['4:3']

  const updateWidth = useCallback(() => {
    const el = parentRef.current
    if (!el) return

    const width = el.clientWidth
    const height = el.clientHeight
    const currentWidth = Math.floor(ratio.width * scaleRef.current)
    const currentHeight = Math.floor(ratio.height * scaleRef.current)
    let newScale = 0

    if (currentWidth !== width) {
      newScale = width / ratio.width
    }
    if (currentHeight !== height) {
      newScale = (newScale === 0) ? height / ratio.height : Math.min(newScale, height / ratio.height)
    }

    if (newScale !== 0) {
      setScale(newScale)
    }
  }, [ratio])

  useEffect(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [updateWidth])

  return (
    <Wrapper
      $scale={scale}
      $width={ratio.width}
      $height={ratio.height}
      $focus={focus}
      $alignment={alignment}
      ref={el => { if (el) parentRef.current = el.parentNode }}
    >
      {children}
    </Wrapper>
  )
}

export default SlideContainer
