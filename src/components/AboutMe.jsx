import './AboutMe.css'
import imageUrl from '../assets/images/nverkhachoyan-sf.jpeg'

function AboutMe() {
  return (
    <section className='about-me'>
        <div className='about-me-headline'>
            <h2>About Me</h2>
        </div>
        <div className='about-me-container'>
            <p className='about-me-text'><strong>Hey, my name is Nver Khachoyan.</strong> I'm a front end web developer, and my focus is primarily ReactJS. I can work with React libraries such as Redux, React Router, and etc. In addition, I'm also pretty confident with HTML and CSS. I'm quick at learning and adapting to new technologies and techniques. I'm currently studying Computer Science at Los Angeles Valley College.
            </p>
            <img className='about-me-image' src={imageUrl} alt="" />
        </div>
    </section>
  )
}

export default AboutMe