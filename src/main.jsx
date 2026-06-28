import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

/* Self-hosted Atkinson Hyperlegible (Regular + Bold), loaded as a side effect.
   Skipped under Save-Data / prefers-reduced-data so low-bandwidth visitors
   fall through to the accessibility-forward system stack — the page stays
   fully readable either way (font-display: swap, metric-compatible fallback). */
function loadFonts() {
  // Optional chaining safely covers browsers without the Network Information API.
  if (navigator.connection?.saveData) return
  import('@fontsource/atkinson-hyperlegible/latin-400.css')
  import('@fontsource/atkinson-hyperlegible/latin-700.css')
}
loadFonts()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
