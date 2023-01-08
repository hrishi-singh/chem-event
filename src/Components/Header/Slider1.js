import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const Slider1= (props) => {
  const currentUser = useAuth();

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
       <h5>14th January 2023.<br/></h5>
       {currentUser.currentUser!=null?"":<>
       <h4>Free Registration for all.</h4> 
        <Link id='Register-btn' to='/registration'>Register Now!</Link>
        <h6>Registration Open till: <br/>
       <h4> 10th January 2023, 5:00 p.m.</h4></h6> 
        </>} 
        </div>      
    </section>
  )
}
export default Slider1
