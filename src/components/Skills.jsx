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
                <p className='skill-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti porro, commodi in cumque blanditiis ad aliquid ut 
                    ratione doloribus, quidem ex quo totam dolor, praesentium cum 
                    expedita odit iste! Excepturi.
                </p>  
             </div>

             <div className="skill">
                <div className="skill-icon js-icon">
                    <i class="fa-brands fa-js"></i>
                </div>
                <h3 className='skill-title'>JavaScript</h3>
                <p className='skill-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti porro, commodi in cumque blanditiis ad aliquid ut 
                    ratione doloribus, quidem ex quo totam dolor, praesentium cum 
                    expedita odit iste! Excepturi.
                </p>  
             </div>

             <div className="skill">
                <div className="skill-icon python-icon">
                    <i class="fa-brands fa-python"></i>
                </div>
                <h3 className='skill-title'>Python</h3>
                <p className='skill-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti porro, commodi in cumque blanditiis ad aliquid ut 
                    ratione doloribus, quidem ex quo totam dolor, praesentium cum 
                    expedita odit iste! Excepturi.
                </p>  
             </div>





          
        </div>
    </section>
  )
}

export default Skills