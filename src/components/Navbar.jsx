import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

import './Navbar.css'

function Navbar() {
    const location = useLocation()
    const path = location.pathname
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className="navbar-logo">
                    <Link to='/'>
                        <h2 className="logo-title">&#123; Nver Khachoyan &#125;</h2>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><a href="/" className={path === '/' ? 'navbar-link-active' : ''}>Home</a></li>
                        <li><a href="http://blog.nverk.me">Blog</a></li>
                        {/* <li><a href="#projects-and-skills" className={path === '/projects' ? 'navbar-link-active' : ''}>Projects</a></li> */}
                        {/* <li><a href="#contact-me" className={path === '/contacts' ? 'navbar-link-active' : ''}>Contacts</a></li> */}
                        {/* <li><a href="#about-me" className={path === '/about' ? 'navbar-link-active' : ''}>About</a></li> */}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar