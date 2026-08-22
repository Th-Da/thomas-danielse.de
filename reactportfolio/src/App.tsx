import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { ImprintPage } from './pages/ImprintPage.tsx'
import { LegalNoticePage } from './pages/LegalNoticePage.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route path="/legal-notice" element={<LegalNoticePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
