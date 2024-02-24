import './Projects.css';
import chromeExtImg from "../assets/images/projects/chromeextension.png"
import csuconnectImg from "../assets/images/projects/csuconnect.png"

function Projects() {
    return (
        <section className='projects'>
            <div className="projects-headline">
                <h2>My Projects</h2>
            </div>
            <div className='projects-container'>
                <div className="project">
                    <h3 className='project-title'>CSUConnect</h3>
                    <img className='project-image' src={csuconnectImg} alt="screenshot of my project, a chrome extension" />
                    <p className='project-body'>
                        Website for student orgs at California State Universities to post about their events.
                    </p>
                    <a className='project-link' href="https://github.com/comp380-F/CSUConnect.git" target="_blank" rel="noopener noreferrer">View on Github</a>
                </div>
                <div className="project">
                    <h3 className='project-title'>Chrome Extension</h3>
                    <img className='project-image' src={chromeExtImg} alt="screenshot of my project, a chrome extension" />
                    <p className='project-body'>
                        A clean and simple chrome extension with the date, time and a daily task list system. Weather information will be added soon.
                    </p>
                    <a className='project-link' href="https://github.com/nverkhachoyan/chrome-extension" target="_blank" rel="noopener noreferrer">View on Github</a>
                </div>
            </div>
        </section>
    )
}

export default Projects