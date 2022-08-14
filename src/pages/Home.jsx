import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe';
import AboutMe from '../components/AboutMe';

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
      <div className="home-container">

        <div id='header-id' className='header-section section' >
          <Navbar/>
          <Header />
          <div className="arrow-down">
            <a href="#projects-and-skills">
            <i className='fa-solid fa-angles-down'></i>

            </a>
          </div>
        </div>

        <div id='projects-and-skills'>
          <Projects />
          <Skills />
        </div>

        
        <ContactMe />
       

   
          <AboutMe />
          <Footer /> 
    

        
      </div>
    </div>
  )
}

export default Home


// ${headerScrolled ? 'slide' : ''}