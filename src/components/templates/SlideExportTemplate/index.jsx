import styled from 'styled-components'
import { parse, walk, generate } from 'css-tree'

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
    min-width: 100%;
    max-width: 100%;
  }
  div.content {
    flex: 1;
  }
`

const generateMonolithicStylesheets = (styles) => {
  return styles
    .map(style => parse(style || ''))
    .map((ast, pageNo) => {
      walk(ast, node => {
        if (node.type === 'Selector') {
          node.children.unshift({ type: 'WhiteSpace', loc: null, value: ' ' })
          node.children.unshift({ type: 'ClassSelector', loc: null, name: `page-${pageNo}` })
        }
      })
      return ast
    })
    .filter(style => !style.children.isEmpty)
    .map(ast => generate(ast))
    .join('\n\n')
}

const SlideExportTemplate = (props) => (
  <Wrapper>
    <NavigationHeader {...props} />
    <div className="row">
      <div className="content">
        <textarea
          readOnly
          value={props.slide.pages.map(p => p.content).join('\n----\n')}
        />
      </div>
      <div className="content">
        <textarea
          readOnly
          value={generateMonolithicStylesheets(props.slide.pages.map(p => p.style))}
        />
      </div>
    </div>
  </Wrapper>
)

export default SlideExportTemplate
