import { useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import html2pdf from 'html2pdf.js'
import { useStore } from '../../../store'

import SlidePrintTemplate from '../../templates/SlidePrintTemplate'

const SlidePrintPage = () => {
  const navigate = useNavigate()
  const slide = useStore(useShallow(s => ({ pages: s.pages, current: s.current })))

  const handlePrint = (el) => {
    html2pdf()
      .from(el.current)
      .set({
        html2canvas: {
          foreignObjectRendering: false,
          useCORS: false,
        },
        jsPDF: { format: 'letter', orientation: 'landscape' },
      })
      .save()
  }

  return (
    <SlidePrintTemplate
      slide={slide}
      onPressPrintButton={handlePrint}
      onPressDoneButton={() => navigate('/')}
    />
  )
}

export default SlidePrintPage
