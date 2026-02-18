import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import html2pdf from 'html2pdf.js'

import Actions from '../../../actions/slide-actions'
import SlidePrintTemplate from '../../templates/SlidePrintTemplate'

const SlidePrintPage = (props) => (<SlidePrintTemplate {...props} />)

const connector = connect(
  s => s,
  dispatch => ({
    onPressPrintButton: (el) => {
      const worker = html2pdf()
            .from(el.current)
            .set({
              html2canvas: {
                foreignObjectRendering: false,
                useCORS: false,
              },
              jsPDF: { format: 'letter', orientation: 'landscape'}
            })
            .save()
    },
    onPressDoneButton: () => dispatch(Actions.uiReturnToTop()),
  })
)

export default connector(SlidePrintPage)
