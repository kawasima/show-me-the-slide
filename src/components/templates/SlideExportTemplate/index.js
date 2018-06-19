import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import csstree from 'css-tree'

import { TextInput } from 'react-native-web'
import NavigationHeader from '../../molecules/NavigationHeader'

const Wrapper = styled.div`
  width: inherit;
  height: inherit;

  textarea {
    width: 100%;
    height: 100vh;
  }

  > div.row {
    flex: 1 100%;
    display: flex;
    min-width: 100%
    max-width: 100%;
  }
  div.content {
    flex: 1;
  }
`

const generateMonolithicStylesheets = (styles) => {
  return styles
    .filter(style => !!style)
    .map(style => csstree.parse(style))
    .map((ast, pageNo) => {
      csstree.walk(ast, node => {
        if (node.type === 'Selector') {
          node.children.unshift({"type":"WhiteSpace","loc":null,"value":" "})
          node.children.unshift({"type":"ClassSelector","loc":null,"name":`page-${pageNo}`})
        }
      })
      return ast
    })
    .map(ast => csstree.generate(ast))
    .join('\n\n')
}

const SlideExportTemplate = (props) => (
  <Wrapper>
    <NavigationHeader {...props}/>
    <div className="row">
      <div className="content">
        <TextInput multiline={true} editable={false}
                 value={props.slide.pages.map(p => p.content).join('\n----\n')}/>
      </div>
      <div className="content">
        <TextInput multiline={true} editable={false}
                   value={generateMonolithicStylesheets(props.slide.pages.map(p => p.style))}/>
      </div>
    </div>
  </Wrapper>
)

SlideExportTemplate.propTypes = {
}

export default SlideExportTemplate
