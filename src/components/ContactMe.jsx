import './ContactMe.css'

function ContactMe() {
  return (
    <section className='contact-me'>
        <div className="contact-me-headline">
            <h2>Contact Me</h2>
        </div>
        <div className="contact-me-container">
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
        </div>
    </section>
  )
}

export default ContactMe