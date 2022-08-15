import { useContext, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { ThemeContext } from './contexts/ThemeContext'

import './App.css'

function App() {
  const {theme} = useContext(ThemeContext)

  const generateMetaTags = () => {
    const meta = document.createElement('meta');
    meta.id = "theme-color"
    meta.name = "theme-color";
    meta.content = theme === 'light' ? '#fff' : "#000";
    document.head.prepend(meta);
  }

  useEffect(() => generateMetaTags(), [theme])

  return (
    
    <div className='app' id={`${theme === 'light' ? 'light' : 'dark'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div> 
    
      
  )
}

export default App
