import './Projects.css';
import chromeExtImg from "../assets/images/projects/chromeextension.png"
import teachyImg from "../assets/images/projects/teachy.png"
import comingSoonImg from "../assets/images/projects/comingsoon.jpeg"

function Projects() {
  return (
    <section className='projects'>
        <div className="projects-headline">
            <h2>My Projects</h2>
        </div>
        <div className='projects-container'>
        <div className="project">
                <h3 className='project-title'>Teachy</h3>
                <img className='project-image' src={teachyImg} alt="screenshot of my project, a chrome extension" />
                <p className='project-body'>
                    A very convenient way to manage classrooms. It will have features such as taking attendance,
                    grading, creating random groups of students, and more. Work in progress.
                </p>   
                <a className='project-link' href="https://github.com/nverkhachoyan/teachy" target="_blank" rel="noopener noreferrer">View on Github</a>
            </div>
            <div className="project">
                <h3 className='project-title'>Chrome Extension</h3>
                <img className='project-image' src={chromeExtImg} alt="screenshot of my project, a chrome extension" />
                <p className='project-body'>
                    A clean and simple chrome extension with the date, time and a daily task list system. Weather information will be added soon.
                </p>   
                <a className='project-link' href="https://github.com/nverkhachoyan/chrome-extension" target="_blank" rel="noopener noreferrer">View on Github</a>
            </div>
            <div className="project">
                <h3 className='project-title'>Coming Soon</h3>
                <img className='project-image' src={comingSoonImg} alt="screenshot of my project, a chrome extension" />
                <p className='project-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti porro, commodi in cumque blanditiis ad aliquid ut 
                    ratione doloribus, quidem ex quo totam dolor, praesentium cum 
                    expedita odit iste! Excepturi.
                </p>   
                <a className='project-link' href="#" target="_blank" rel="noopener noreferrer">View on Github</a>
            </div>
        </div>
    </section>
  )
}

export default Projects