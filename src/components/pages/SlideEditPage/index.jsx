import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { useStore } from '../../../store'

import SlideEditTemplate from '../../templates/SlideEditTemplate'

const SlideEditPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const slide = useStore(useShallow(s => ({ pages: s.pages, current: s.current })))
  const updatePage = useStore(s => s.updatePage)
  const addPage = useStore(s => s.addPage)
  const selectPage = useStore(s => s.selectPage)
  const deleteAllSlides = useStore(s => s.deleteAllSlides)
  const loadSlide = useStore(s => s.loadSlide)

  useEffect(() => {
    const content = searchParams.get('content')
    const style = searchParams.get('style')
    if (content || style) {
      loadSlide(content, style)
    }
  }, [])

  return (
    <SlideEditTemplate
      slide={slide}
      onUpdatePage={(pageNumber, page) => updatePage(page)}
      onPressF5={() => navigate('/show')}
      onPressNewSlide={() => addPage()}
      onPressSlide={(index) => selectPage(index)}
      onPressExportButton={() => navigate('/export')}
      onPressDeleteButton={() => deleteAllSlides()}
    />
  )
}

export default SlideEditPage
