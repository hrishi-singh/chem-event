import './RegistrationV1.css'
import '../Core-team/Core-team.css'

import axios from 'axios';
import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import {useNavigate} from "react-router-dom"
import {ref} from "firebase/database";
import { getDatabase, set } from "firebase/database";



const RegistrationV1 = () => {
  const[name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phone,setphone]=useState('');
  const [college,setcollege]=useState(''); 
  const [gender,setgender]=useState(''); 
  const [accomodation,setaccomodation]=useState(''); 
  const [enrolled,setenrolled]=useState(''); 

  

  const {signup}  = useAuth()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()



  
  async function handleSubmit(e) {

    e.preventDefault();
    //console.log(e.target[4].value,e.target[5].value)
    if (e.target[4].value !== e.target[5].value) {
      return alert("Passwords do not match! ")
    }
    const data ={
      name :name,
      email: email,
      phone : phone,
      college : college,
      gender: gender,
      accomodation:accomodation,
      enrolled : enrolled
    }

    try {
      
      setError("")
      setLoading(true)
      
      const val = await signup(e.target[2].value, e.target[4].value)
      alert("Successfully Registered !")
      const db = getDatabase();
      set(ref(db, 'users/' + val.user.uid), {
      name :name,
      email: email,
      phone : phone,
      college : college,
      gender: gender,
      accomodation:accomodation,
      enrolled : enrolled
        
      })
      axios.post('https://sheet.best/api/sheets/886f40f2-9c18-4076-b56f-d882fc59185e',data).then((response)=>{
        console.log(response);
        setemail('');
        setcollege('');
        setname('');
        setphone('+91');
      })
      

    history("/")

    } 
    catch(error) {

      alert("Error : Invalid Registration Details.\n Try Again.")
      setError("Failed to create an account")
    }

    setLoading(false)
  }


  return (
    < >
  <div className="regbody">
  <div className="regcotainer">
    <div className="regtitle">Registration <br/> Registration Closed </div>
    <div className="regcontent">
      <form action="#" onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required="True" onChange={(e)=>setname(e.target.value)} value={name}/>
          </div>
          <div className="input-box">
            <span className="details">Institute Name</span>
            <input type="text" placeholder="Enter your Institute Name" required="True"  onChange={(e)=>setcollege(e.target.value)} value={college} />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required="True" onChange={(e)=>setemail(e.target.value)} value={email}/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" defaultValue="+91 " maxLength={14} required="True" onChange={(e)=>setphone(e.target.value)} value={phone}/>
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
          <input type="radio" name="gender" id="dot-1" required="True" onChange={(e)=>setgender(e.target.value)} value={"Male"}/>
          <input type="radio" name="gender" id="dot-2" required="True"  onChange={(e)=>setgender(e.target.value)} value={"Female"} />

          <span className="gender-title">Gender:  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one" />
              <span className="gender">Male</span>
            </label>

            <label htmlFor="dot-2">
              <span className="dot two" />
              <span className="gender">Female</span>
            </label>
          </div>
        </div>

        <div className="accomodation-details">
          <input type="radio" name="accomodation" id="dot-11" required="True" onChange={(e)=>setaccomodation(e.target.value)} value={"Yes"}/>
          <input type="radio" name="accomodation" id="dot-22" required="True" onChange={(e)=>setaccomodation(e.target.value)} value={"No"} />
          <span className="accomodation-title">Accomodation required :</span>
          <div className="category">
            
            <label htmlFor="dot-11">
              <span className="dot one1" />
              <span className="gender">Yes</span>
            </label>
            <label htmlFor="dot-22">
              <span className="dot two2" />
              <span className="gender">No</span>
            </label>
          </div>
        </div>


        <div className="student-details">
          <input type="radio" name="student" id="dot-111" required="True" onChange={(e)=>setenrolled(e.target.value)} value={"UG"}/>
          <input type="radio" name="student" id="dot-222" required="True" onChange={(e)=>setenrolled(e.target.value)} value={"PG"}/>
          <span className="student-title">Enrolled in :</span>
          <div className="category">
            
            <label htmlFor="dot-111">
              <span className="dot one11" />
              <span className="gender">UG</span>
            </label>
            <label htmlFor="dot-222">
              <span className="dot two22" />
              <span className="gender">PG</span>
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
