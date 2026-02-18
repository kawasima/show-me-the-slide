import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, View } from 'react-native-web'
import MarkdownEditor from '../../molecules/MarkdownEditor'

const Wrapper = styled.div`
  position: relative
`

const createUpdatePage = (props, mode) =>
      (editor, data, value) => props.onUpdatePage(props.slide.current,
                                                  { [mode]: value })

class PageEditor extends React.Component {
  state = {
    mode: 'content'
  }

  render() {
    const props = this.props
    const { mode } = this.state
    return (
      <Wrapper>
        <MarkdownEditor value={props.slide.pages[props.slide.current][mode]}
                        onUpdatePage={createUpdatePage(props, mode)} />
        <View style={{position:'absolute', top: 0, right: 0, zIndex: 100}}>
          <Button title={`🔁 ${mode}`}
                  onPress={() => this.setState({mode: mode === 'content' ? 'style' : 'content'})}/>
        </View>
      </Wrapper>
    )
  }
}

PageEditor.propTypes = {
}

export default PageEditor
