import React from 'react'
import headerImageUrl from '../assets/images/nverkhachoyan.jpeg'

import './Header.css'

function Header() {
  return (
    <header className='header'>
       <div className="header-container">
            <div className="header-card">
                <h2 className="header-greeting">Hey, I'm Nver Khachoyan</h2>
                <h1 className="header-body">I make custom websites and web apps</h1>
                <div className="socials">
                    <h3>Find Me On Social Media</h3>
                    <div className="socials-container">
                        <a href="https://discordapp.com/users/444615533162135573/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-discord"></i>
                        </a>
                        <a href="https://t.me/NverK" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://twitter.com/nverkhachoyan" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://github.com/nverkhachoyan" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <a className="reach-out" href="#contact-me">Reach Out</a>
            </div>
            <div className="header-image">
                <img src={headerImageUrl} alt="" />
            </div>

            <div className="arrow-down">
                <a href="#projects-and-skills">
                <i className='fa-solid fa-angles-down'></i>

                </a>
            </div>
        </div> 
    </header>
  )
}

export default Header