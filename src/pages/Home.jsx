import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe';
import AboutMe from '../components/AboutMe';

import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="home-container">

        <div id='header-id' className='header-section section' >
          <Navbar />
          <Header />
        </div>

        {/* <div id='projects-and-skills'> */}
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* </div> */}


        {/* <ContactMe /> */}
        {/* <AboutMe /> */}
        <Footer />

      </div>
    </div>
  )
}

export default Home


// ${headerScrolled ? 'slide' : ''}