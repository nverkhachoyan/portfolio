import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

import './Home.css'
import Books from '../components/books/Books'

function Home() {
  return (
    <div className='home'>
      <div className="home-container">
        <div id='header-id' className='header-section section'>
          <Navbar />
          <Header />
        </div>

        <Skills />
        <Projects />
        <Books />
        <Footer />
      </div>
    </div>
  )
}

export default Home