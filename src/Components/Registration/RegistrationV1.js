import './RegistrationV1.css'
import '../Core-team/Core-team.css'

// import axios from 'axios';
import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import {useNavigate} from "react-router-dom"
// import { Link, useNavigate} from "react-router-dom"
import {ref} from "firebase/database";
// import {ref,push,child,update} from "firebase/database";
import { getDatabase, set } from "firebase/database";


import {useForm} from "react-hook-form";



const RegistrationV1 = () => {
  const {register, formState:{errors}} = useForm();


  const {signup}  = useAuth()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()
  //const  {currentUser}  = useAuth()



  
  async function handleSubmit(e) {

    e.preventDefault()
    try {
      
      setError("")
      setLoading(true)
      
      const val = await signup(e.target[2].value, e.target[4].value)
      //await login(emailRef.current.value, passwordRef.current.value)
      alert("hi")
      const db = getDatabase();
      set(ref(db, 'users/' + val.user.uid), {
        username: e.target[0].value,
        institute_name: e.target[1].value,
        email: e.target[2].value ,
        phone: e.target[3].value,
        gender: e.target[6].value,
        accomodation: e.target[7].value,
        enrolled_in:e.target[8].value
        
      })

    history("/")

    } 
    catch(error) {

      alert(error)
      setError("Failed to create an account")
    }

    setLoading(false)
  }


  return (
    < >
  <div className="regbody">
  {/* <meta charSet="UTF-8" /> */}

  {/* <link rel="stylesheet" href="style.css" /> */}
  {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
  {/* <h1>Registration Form</h1> */}
  <div className="regcotainer">
    <div className="regtitle">Registration</div>
    <div className="regcontent">
      <form action="#" onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required="True" />
          </div>
          <div className="input-box">
            <span className="details">Institute Name</span>
            <input type="text" placeholder="Enter your Institute Name" required="True" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required="True" />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" defaultValue="+91 " maxLength={14} required="True" />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" minLength={6} required="True" />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input
              type="password"
              placeholder="Confirm your password"
              required="True"
            />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" required="True"/>
          <input type="radio" name="gender" id="dot-2"  />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender-title">Gender &nbsp; {'\n'}</span>

          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one" />
              <span className="gender">Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two" />
              <span className="gender">Female</span>
            </label>
               <label htmlFor="dot-33">
              <span className="dot two3" />
              <span className="gender"></span>
            </label>
          </div>
        </div>

        <div className="accomodation-details">
          <input type="radio" name="accomodation" id="dot-11" required="True" />
          <input type="radio" name="accomodation" id="dot-22" required="True" />
          <span className="accomodation-title">Accomodation required</span>
          <div className="category">
            
            <label htmlFor="dot-11">
              <span className="dot one1" />
              <span className="gender">Yes</span>
            </label>
            <label htmlFor="dot-22">
              <span className="dot two2" />
              <span className="gender">No</span>
            </label>
            <label htmlFor="dot-33">
              <span className="dot two3" />
              <span className="gender"></span>
            </label>

          </div>
        </div>


        <div className="student-details">
          <input type="radio" name="student" id="dot-111" required="True"/>
          <input type="radio" name="student" id="dot-222" required="True" />
          <span className="student-title">Enrolled in</span>
          <div className="category">
            
            <label htmlFor="dot-111">
              <span className="dot one11" />
              <span className="gender">UG</span>
            </label>
            <label htmlFor="dot-222">
              <span className="dot two22" />
              <span className="gender">PG</span>
            </label>
            <label htmlFor="dot-33">
              <span className="dot two3" />
              <span className="gender"></span>
            </label>

          </div>
        </div>
        <div className="reg-register">  
        <div className="regbutton">  
          <input type="submit" value="    Register    " />
        </div>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  );
}

export default RegistrationV1