import React from 'react'
import './about.css'
const About = (props) => {
  return (
    <div className='about'>

 
        <h1>About Us</h1>
        {/* <div className="content">
            
        </div> */}

        <p>
//           {props.name} is a one-day symposium organized by the Department of Chemical Engineering, IIT Jodhpur. It is an amalgamation of many academic components with 
//     a hint of fun such as competitive events, lectures, and workshops. We aim to provide a glimpse of the spirit of Chemical Engineering to the young undergraduate 
//     and postgraduate students from various corners of India. It will comprise lectures by {props.lecturer}. The event is sponsored by industries like {props.comp}. 
//     We welcome you to the first Chemical Department event hosted at IIT Jodhpur. Check out the {props.eventurl} for more details!
          The Department of Chemical Engineering, IIT Jodhpur is delighted to organize ‘CHEM-E-SORPTION 2022’ with a theme of ‘Sustainable Chemical Engineering’. 
          Chem-E-Sorption is a unique amalgamation of intriguing competitions, invited lectures from academia and industry, panel discussions and other activities. 
          The core idea of this event is to provide a platform to the young talented students of chemical engineering and enthusiastic research scholars with the real
          world rapidly ever-changing technologies to enhance their knowledge and comprehend advanced technologies in the domain of chemical and interdisciplinary 
          engineering.
      </p>
    </div>
  )
}

export default About
