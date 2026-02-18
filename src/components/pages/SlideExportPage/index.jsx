import { useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { useStore } from '../../../store'

import SlideExportTemplate from '../../templates/SlideExportTemplate'

const SlideExportPage = () => {
  const navigate = useNavigate()
  const slide = useStore(useShallow(s => ({ pages: s.pages, current: s.current })))

  return (
    <SlideExportTemplate
      slide={slide}
      onPressDoneButton={() => navigate('/')}
    />
  )
}

export default SlideExportPage
