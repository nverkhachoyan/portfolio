import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { UseThemeContext } from './contexts/ThemeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseThemeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UseThemeContext>
  </React.StrictMode>
)
