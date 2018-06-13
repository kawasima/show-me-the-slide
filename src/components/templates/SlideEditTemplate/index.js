import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-java'
import 'prismjs/themes/prism.css'

import SlideContainer from '../../atoms/SlideContainer'
import SlideKeyOperationContainer from '../../atoms/SlideKeyOperationContainer'
import MarkdownEditor from '../../molecules/MarkdownEditor'
import Slide from '../../molecules/Slide'
import NavigationHeader from '../../molecules/NavigationHeader'
import SlidePreviewList from '../../organisms/SlidePreviewList'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  > div.row {
    flex: 1 100%;
    display: flex;
    min-width: 100%
    max-width: 100%;
  }

  div.content {
    flex: 1;
  }

  div.content.full {
    min-width: 100%
    max-width: 100%;
  }
`

const SlideEditTemplate = (props) => (
  <Wrapper>
    <NavigationHeader/>
    <div className="row">
      <div className="content full">
        <SlidePreviewList slide={props.slide}
                          onPressNewSlide={props.onPressNewSlide}
                          onPressSlide={props.onPressSlide}/>
      </div>
    </div>
    <div className="row">
      <div className="content" style={{maxWidth: '50%'}}>
        <MarkdownEditor value={props.slide.pages[props.slide.current]}
                        onUpdatePage={(editor, data, value) => props.onUpdatePage(props.slide.current, value)} />
      </div>
      <div className="content" style={{margin: '0.5em'}}>
        <SlideContainer>
          <SlideKeyOperationContainer {...props}>
            <Slide input={props.slide.pages[props.slide.current]}/>
          </SlideKeyOperationContainer>
        </SlideContainer>
      </div>
    </div>
  </Wrapper>
)

SlideEditTemplate.propTypes = {
  slide: PropTypes.object,
}

export default SlideEditTemplate
