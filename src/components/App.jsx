import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SlideShowPage from './pages/SlideShowPage'
import SlideEditPage from './pages/SlideEditPage'
import SlideExportPage from './pages/SlideExportPage'
import SlidePrintPage from './pages/SlidePrintPage'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/show" element={<SlideShowPage />} />
      <Route path="/export" element={<SlideExportPage />} />
      <Route path="/print" element={<SlidePrintPage />} />
      <Route path="/" element={<SlideEditPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
