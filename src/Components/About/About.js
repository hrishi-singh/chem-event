import React from 'react'
import './about.css'
const About = (props) => {
  return (
    <div className='about'>

 
        <h1>About Us</h1>
        {/* <div className="content">
            
        </div> */}

        <p>{props.EventName} is a one-day symposium organized by the Department of Chemical Engineering, IIT Jodhpur. It is an amalgamation of many academic components with 
    a hint of fun such as competitive events, lectures, and workshops. We aim to provide a glimpse of the spirit of Chemical Engineering to the young undergraduate 
    and postgraduate students from various corners of India. It will comprise lectures by {props.lecturer}. The event is sponsored by industries like {props.comp}. 
    We welcome you to the first Chemical Department event hosted at IIT Jodhpur. Check out the {props.eventurl} for more details!</p>
    </div>
  )
}

export default About
