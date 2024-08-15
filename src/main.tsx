import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { App } from '@/app/App'
import { store } from '@/app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
