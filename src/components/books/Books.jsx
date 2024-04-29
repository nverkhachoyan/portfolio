import './Books.css';
import hpbnImage from "../../assets/images/books/hpbn.gif";
import byowbImage from "../../assets/images/books/byowb.png"

function Books() {
    return (
        <section className='projects'>
            <div className="projects-headline">
                <h2>Books I recommend</h2>
            </div>
            <div className='projects-container'>

                <div className='book-card'>
                    <div className='project-title'>
                        <h3>High Performance Browser Networking</h3>
                        <span>by Ilya Grigorik</span>
                    </div>
                    <img className='book-image' src={hpbnImage} alt="book cover" />
                    <p className='project-body'>
                        The best book out there to learn how to design fast and efficient web applications.
                        It helped me understand the basic performance issues in networking.
                        It is a must-read for any web developer striving to grow their skillset.
                    </p>
                    <div className='links'>
                        <a className='project-link' href="https://hpbn.co/" target="_blank" rel="noopener noreferrer">Web</a>
                        <a className='project-link' href="https://a.co/d/7cmd6Xw" target="_blank" rel="noopener noreferrer">Amazon</a>
                    </div>

                </div>

                <div className='book-card'>
                    <div className='project-title'>
                        <h3>Build Your Own Web Server From Scratch In Node.JS</h3>
                        <span>by James Smith</span>
                    </div>
                    <img className='book-image' src={byowbImage} alt="book cover" />
                    <p className='project-body'>
                        Learn network programming, HTTP, and WebSocket by coding a Web Server.
                    </p>
                    <div className='links'>
                        <a className='project-link' href="https://build-your-own.org/webserver/" target="_blank" rel="noopener noreferrer">Web</a>
                        <a className='project-link' href="https://www.amazon.com/dp/B0CVQ5F6YD?&linkId=fd00e6f8b942d91ff3a0ff3c8d982362&language=en_US" target="_blank" rel="noopener noreferrer">Amazon</a>
                    </div>

                </div>



            </div>
        </section>
    )
}

export default Books