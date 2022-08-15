import { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { ThemeContext } from './contexts/ThemeContext'

import './App.css'

function App() {
  const {theme} = useContext(ThemeContext)

  return (
    
    <div className='app' id={`${theme === 'light' ? 'light' : 'dark'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div> 
    
      
  )
}

export default App
