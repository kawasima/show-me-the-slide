import { useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { useStore } from '../../../store'

import SlideShowTemplate from '../../templates/SlideShowTemplate'

const SlideShowPage = () => {
  const navigate = useNavigate()
  const slide = useStore(useShallow(s => ({ pages: s.pages, current: s.current })))
  const goToNext = useStore(s => s.goToNext)
  const goToPrev = useStore(s => s.goToPrev)

  return (
    <SlideShowTemplate
      slide={slide}
      onPressEscape={() => navigate('/')}
      onPressArrowRight={() => goToNext()}
      onPressArrowLeft={() => goToPrev()}
    />
  )
}

export default SlideShowPage
