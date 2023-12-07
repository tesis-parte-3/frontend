import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme } from '@mantine/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store.ts'
import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';


function Main() {
  return (
    <ReduxProvider store={store}>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        <Router>
          <App />
        </Router>
      </MantineProvider>
    </ReduxProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
