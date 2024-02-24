import React from 'react'
import './Resume.css'

function Resume() {
    return (
        <section className='resume'>
            <div className="skills-headline">
                <h2>Resume</h2>
            </div>

            <div className="portfolio-container">
                <header className="portfolio-header">
                    <h1>Nver Khachoyan</h1>
                    <p>Exploring the depths of Computer Science</p>
                </header>
                <section className="education-section">
                    <h2>Education</h2>
                    <p>B.S. Computer Science, California State University Northridge, Expected June 2025, GPA: 3.56</p>
                    <p>B.S. Computer Science, Los Angeles Valley College Valley Glen, August 2022, GPA: 3.68</p>
                </section>
                <section className="skills-section">
                    <h2>Skills</h2>
                    <p>Languages: C/C++, Python, Java, JavaScript/TypeScript, HTML/CSS</p>
                    <p>Tools: Git/GitHub, Unix Shell, VS Code, IntelliJ, CLion/PyCharm/IDEA</p>
                </section>
                <section className="projects-section">
                    <h2>Projects</h2>
                    <article>
                        <h3>CSUConnect</h3>
                        <p>A platform for student clubs and organizations to connect and share events.</p>
                    </article>
                    <article>
                        <h3>Chrome Extension</h3>
                        <p>A custom extension for daily tasks, time, and date management with pleasing backgrounds.</p>
                    </article>
                    <article>
                        <h3>YouTube Channel</h3>
                        <p>Educational tech videos, with a focus on Computer Architecture and Software Engineering projects.</p>
                    </article>
                </section>
                <section className="experience-section">
                    <h2>Experience</h2>
                    <p>Web Developer at AM Physical Therapy, Jan. 2020 - June 2020</p>
                    <p>Freelance Interpreter/Translator, 2019 - Present</p>
                </section>
                <section className="certificates-section">
                    <h2>Certificates</h2>
                    <p>Advanced React at Scrimba, July-Aug 2022</p>
                    <p>JavaScript Deep Dive at Scrimba, July-Aug 2022</p>
                    <p>Google IT Support, Oct. 2019</p>
                </section>
            </div>
        </section>
    )
}

export default Resume
