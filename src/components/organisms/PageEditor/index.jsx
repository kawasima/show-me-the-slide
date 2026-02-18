import { useState } from 'react'
import styled from 'styled-components'

import MarkdownEditor from '../../molecules/MarkdownEditor'

const Wrapper = styled.div`
  position: relative
`

const ToggleButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  cursor: pointer;
`

const PageEditor = ({ slide, onUpdatePage }) => {
  const [mode, setMode] = useState('content')

  const handleUpdate = (editor, data, value) => {
    onUpdatePage(slide.current, { [mode]: value })
  }

  return (
    <Wrapper>
      <MarkdownEditor
        value={slide.pages[slide.current][mode]}
        onUpdatePage={handleUpdate}
      />
      <ToggleButton onClick={() => setMode(m => m === 'content' ? 'style' : 'content')}>
        {`\u{1F501} ${mode}`}
      </ToggleButton>
    </Wrapper>
  )
}

export default PageEditor
