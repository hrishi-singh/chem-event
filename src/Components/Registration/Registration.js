// import React,{useState} from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './Registration.css'
import '../Core-team/Core-team.css'
// import axios from 'axios';


// function Registration() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pwd, setPwd] = useState('');
//   const onSubmit= (e) => {
//     e.preventDefault();
//     const data={
//       name:name,
//       email:email,
//       pwd:pwd
//     }
//     // console.log(data);
//     axios.post('https://sheet.best/api/sheets/886f40f2-9c18-4076-b56f-d882fc59185e',data).then((response)=>{
//     })
//   }
//   return (
//     <div className='container'>
//        <Form className='container my-3 card'>
//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Name*</Form.Label>
//         <Form.Control type="text" placeholder="Enter Name" 
//          onChange={(e)=>setName(e.target.value)} value={name} />
//       </Form.Group>

//  <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address*</Form.Label>
//         <Form.Control type="email" placeholder="Enter email"
//         onChange={(e)=>setEmail(e.target.value)} value={email}/>
//       </Form.Group>

//       <Form.Group className="mb-3 col-sm" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" 
//          onChange={(e)=>setPwd(e.target.value)} value={pwd}/>
//       </Form.Group> 

   

//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Terms and Conditions" />
//       </Form.Group>
//       <Button variant="primary" onClick={onSubmit} type="submit">
//         Submit
//       </Button>
     
//     </Form>
//     </div>
//   )
// }

// export default Registration


import React from "react";
import {useForm} from "react-hook-form";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



function  Registration(){
  const {register, formState:{errors}} = useForm();
  const particlesInit = async (main) => {
    console.log(main);

  await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className='regbody'>
    <p className="title">Registration</p>

    <form className="reg">
      <input type="text" placeholder="Full Name" required {...register("name")}/>
      <input type="text" placeholder="Institute Name"{...register("Institute Name")}/>
      <div className="dropdown">
      <label for="Gender">Gender:     
      <select id="Gender" name="Gender" {...register("Gender",{required: true})} >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Prefer not to say</option>
      </select></label>
    <div className="acc">
      <label for="Accomodation">Accomodation: 
      <select id="Accomodation" name="Accomodation" {...register("Accomodation",{required: true})}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select></label></div></div>


      <input type="email" placeholder="Email"{...register("email",{required: true})}/>
      {errors.email && <span style={{color:"red"}}>Email is mandatory</span>}
      
      <div className="Pass">
        <input type="password" placeholder="Password" {...register("password",{required: true})}/>
     <div className="confirm"> <input type="password" placeholder="Confirm Password" required/>
     </div></div>
      <input type="tel" placeholder="Phone number" {...register("mobile number", {required: true})}/>

      <input type={"submit"}
        style={{backgroundColor: '#a1eafb'}} />
    </form>
    <div className="particles">  
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                  opacity: 1,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1%3,
                  straight: false,
                  
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          /></div>
    </div>
  );
  
}

export default Registration;