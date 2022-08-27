import React from 'react'
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Link } from 'react-router-dom';

const Slider1= (props) => {
    const particlesInit = async (main) => {
        console.log(main);
    
      await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    <section className='welcome'>
      <div id='particles-js' className='container'>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/8cca6a97228621.5fd99b2882636.png' alt="" className='thumbnail-img1'/>
       <span>
        <h4>Department of Chemical Engineering</h4>
        <h4> In collaboration with IICHE </h4>
      
          {/* <Particles
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
                  opacity: 0.05,
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
                  speed: 2%3,
                  straight: false,
                  
                },
                number: {
                  density: {
                    enable: true,
                    area: 1800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type:"circle"
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          /> */}
        <p>Brings to you</p>
       </span>
          <h1>{props.EventName}</h1>
          <h5> Theme: Sustainable Chemical Engineering </h5>
        
        <Link id='Register-btn' to='/registration'>Register Now!</Link>
        <h6> Last date to register: <br/>
       <h4> 10th September 2022.</h4></h6>
        </div>        
    </section>
  )
}
console.log(Particles.speed);
export default Slider1
