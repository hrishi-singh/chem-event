import React from 'react'
import { Link } from 'react-router-dom';

const Slider1= (props) => {
  return (
    <section className='welcome'>
      <div id='particles-js' className='container'>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/8cca6a97228621.5fd99b2882636.png' alt="" className='thumbnail-img1'/>
       <span>
        <h4>Department of Chemical Engineering IITJ</h4>
        <p>Brings to you</p>
       </span>
          <h1>{props.EventName}</h1>
          <h5> Theme: Sustainable Chemical Engineering <br/> </h5>
          <h6> Event Date: <br/></h6>
       <h5> 24th September 2022.<br/></h5>
       <h4>Free Registration for all.
        </h4> 
        <Link id='Register-btn' to='/registration'>Register Now!</Link>
        <h6> Last date to register: <br/>
       <h4> 17th September 2022.</h4></h6>
        </div>        
    </section>
  )
}
export default Slider1
