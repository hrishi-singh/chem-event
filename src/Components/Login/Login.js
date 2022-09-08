import React,{useState} from 'react'
// import Coming_soon from '../Coming_Soon/Coming_soon'
import {useAuth} from '../contexts/AuthContext';
import {useForm} from "react-hook-form";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Login.css';
import {useNavigate,Link} from 'react-router-dom';
import ForgotPwdPopup from '../ForgotPassword/ForgotPwdPopup';

function Login () {
  const {register, formState:{errors}} = useForm();
  const particlesInit = async (main) => {
    console.log(main);

  await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const {login}  = useAuth()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()
  const  {currentUser}  = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      
      setError("")
      setLoading(true)
      
      const val = await login(e.target[0].value, e.target[1].value)
      //await login(emailRef.current.value, passwordRef.current.value)
      history("/")
      alert("You have logged in successfully.")
      // console.log(`hello ${currentUser.currentUser.uid} , you have logged in successfully.`)
      
      
    }
    catch(error) {
      
      alert(error)
      setError("Failed to log in")
    }
    setLoading(false)
    document.getElementById("formlogin").reset();
  }

  return (
    <div className='loginbody'>
      <div className="loginform">
    <p className="title"><h3>Login</h3></p>

    <form className="login" id='formlogin' onSubmit={handleSubmit} autocomplete="off">

    
      <input type="email" id='emailinput' placeholder="Email"{...register("email",{required: true})}/>
      {errors.email && <span style={{color:"red"}}>Email is mandatory</span>}
      
      <div className="Pass">
        <input type="password" id='pwdinput'  placeholder="Password"  {...register("password",{required: true})}/>
     </div>

      <input type={"submit"}
        id='loginbtn' />
    </form>
    {/* <Link to='/forgot-password' style={{color:'white'}}> Forgot password?</Link> */}
    <ForgotPwdPopup/>
      </div>
    
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
                  opacity: 0.01,
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
                    area: 600,
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

export default Login
