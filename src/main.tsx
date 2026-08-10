import { createRoot } from 'react-dom/client'
import './_index.scss'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
)
