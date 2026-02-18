import styled from 'styled-components'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/markdown/markdown'

const Wrapper = styled.div``

const MarkdownEditor = ({ value = '', onUpdatePage = () => {} }) => (
  <Wrapper>
    <CodeMirror
      value={value}
      onBeforeChange={onUpdatePage}
      options={{ theme: 'material' }}
    />
  </Wrapper>
)

export default MarkdownEditor
