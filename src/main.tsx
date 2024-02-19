import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import * as ServiceWorker from './pages/serviceWorker.tsx'


function Main() {
  return (
      <MantineProvider >
        <Router>
          <App />
        </Router>
      </MantineProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)

ServiceWorker.register()
