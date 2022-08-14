import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'

import './Navbar.css'

function Navbar() {
    const location = useLocation()
    const path = location.pathname

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                    <div className="navbar-logo">
                        <Link to='/'>
                            <img className='logo-smiley' src={logo} alt="" />
                        </Link>
                        <Link to='/'>
                            <h2 className="logo-title">Nver Khachoyan</h2>
                        </Link>
                    </div>
                <nav>
                    <ul>
                        <li><a href="/"  className={path === '/' ? 'navbar-link-active' : ''}>Home</a></li>
                        <li><a href="/" className={path === '/projects' ? 'navbar-link-active' : ''}>Projects</a></li>
                        <li><a href="/" className={path === '/contacts' ? 'navbar-link-active' : ''}>Contacts</a></li>
                        <li><a href="/" className={path === '/about' ? 'navbar-link-active' : ''}>About</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar