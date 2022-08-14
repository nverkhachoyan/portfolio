import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer'

import './Home.css'

function Home() {
  const [headerScrolled, setHeaderScrolled] = useState(false)
 
  useEffect(() => 
  window.onscroll = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      console.log("Scrolled 50px down")
      setHeaderScrolled(true)
    } else {
      setHeaderScrolled(false)
    }
  }, 
  [])

  return (
    <div className='home'>
      <div className={`header-section ${headerScrolled ? 'slide' : ''}`} >
        <Navbar/>
        <Header />
        <div className="arrow-down">
        <i className='fa-solid fa-angles-down'></i>
        </div>
      </div>
        <Projects />
        <Skills />
        <Footer />
    </div>
  )
}

export default Home