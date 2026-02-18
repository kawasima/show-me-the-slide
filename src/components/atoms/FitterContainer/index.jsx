import { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: inherit;
  width: inherit;
`

const WRAPPER_CLASSNAME = 'text-fitter-wrapper'

const getChildren = (element) => element.querySelectorAll('*')

const getInnerHeight = (element) => {
  const height = window.getComputedStyle(element, null).getPropertyValue('height').replace('px', '')
  return parseFloat(height)
}

const getContentWrapper = (element) => {
  return element.querySelectorAll('.' + WRAPPER_CLASSNAME)[0]
}

const isOverflown = (element) => {
  const height = getInnerHeight(element)
  const contentHeight = getContentWrapper(element).offsetHeight
  return contentHeight >= height
}

const getFontSizeOfElement = (element) => {
  const style = window.getComputedStyle(element, null).getPropertyValue('font-size')
  return parseFloat(style)
}

const calcNewFontSizes = (elements, multiplier) => {
  const ret = []
  elements.forEach(el => ret.push(getFontSizeOfElement(el) * multiplier))
  return ret
}

const shrinkText = (element) => {
  while (isOverflown(element)) {
    const children = getChildren(element)
    const newFontSizes = calcNewFontSizes(children, 0.99)
    children.forEach((el, i) => (el.style.fontSize = newFontSizes[i] + 'px'))
  }
}

const enlargeText = (element) => {
  do {
    const children = getChildren(element)
    const newFontSizes = calcNewFontSizes(children, 1.01)
    children.forEach((el, i) => (el.style.fontSize = newFontSizes[i] + 'px'))
  } while (!isOverflown(element))
}

const generateArray = (elements) => {
  if (elements.constructor.name === 'HTMLCollection') return [...elements]
  return elements
}

function fix(els, enlarge = true) {
  const elements = generateArray(els)
  if (!elements || elements.length < 1) return
  elements.forEach(el => {
    const children = getChildren(el)
    el.innerHTML = '<div class="' + WRAPPER_CLASSNAME + '">' + el.innerHTML + '</div>'
    if ((enlarge || isOverflown(el)) && children.length > 0) {
      getContentWrapper(el).style.display = 'inline-block'
      if (!isOverflown(el)) enlargeText(el)
      shrinkText(el)
      getContentWrapper(el).style.display = 'unset'
    }
  })
}

const FitterContainer = ({ children }) => {
  const dom = useRef(null)

  useEffect(() => {
    if (dom.current) fix([dom.current])
  })

  return (
    <Wrapper ref={dom}>
      {children}
    </Wrapper>
  )
}

export default FitterContainer
