import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/markdown/markdown'

const Wrapper = styled.div`
`

class MarkdownEditor extends React.Component {
  render() {
    return (
      <Wrapper>
        <CodeMirror value={this.props.value}
                    onBeforeChange={this.props.onUpdatePage}
                    options={{
                      theme: 'material'
                    }}/>
      </Wrapper>
    )
  }

  static defaultProps = {
    value: '',
    onUpdatePage: () => {},
  }
}

MarkdownEditor.propTypes = {
  value: PropTypes.string,
  onUpdatePage: PropTypes.func,
}

export default MarkdownEditor
