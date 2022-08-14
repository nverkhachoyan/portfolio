import './Skills.css';

function Skills() {
  return (
    <section className='skills'>
        <div className="skills-headline">
            <h2>The Technologies I Use</h2>
        </div>
        <div className='skills-container'>
             <div className="skill">
                <div className="skill-icon react-icon">
                    <i class="fa-brands fa-react"></i>
                </div>
                <h3 className='skill-title'>React</h3>  
             </div>

             <div className="skill">
                <div className="skill-icon js-icon">
                    <i class="fa-brands fa-js"></i>
                </div>
                <h3 className='skill-title'>JavaScript</h3>
             </div>

             <div className="skill">
                <div className="skill-icon python-icon">
                    <i class="fa-brands fa-python"></i>
                </div>
                <h3 className='skill-title'>Python</h3>
             </div>





          
        </div>
    </section>
  )
}

export default Skills