import { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import Markdown from 'react-markdown'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
  filter: drop-shadow(3px 3px 1px rgba(0,0,0,0.6));
`

const SlideContent = styled.div`
  ${props => props.$center && 'text-align: center;' }
  ${props => props.$middle && 'vertical-align: middle;' }
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  padding: 1em 4em 1em 4em;
  font-size: x-large;

  img {
    max-width: 100%;
  }

  ${props => props.$styleText}
`

const Slide = ({ content = '', styleText, onClick, center, middle }) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Wrapper onClick={onClick}>
      <SlideContent $styleText={styleText} $center={center} $middle={middle}>
        <Markdown>{content}</Markdown>
      </SlideContent>
    </Wrapper>
  )
}

export default Slide
