import React from 'react'
import Marquee from 'react-fast-marquee'
import tp from './touristspots.json';
import './TouristSpots.css';

const TouristSpots = () => {      
  return (
    <div>
        <h1 className='spotTitle'>Places to Visit at Jodhpur</h1>

<Marquee pauseOnHover={true} speed={10} gradientColor={[255,255,255]}>
            {
                tp.places.map((det)=>{
                    return(
                      <>
                      <div className='spotSlide'>
                            <img src={det.img} alt={det.Name} key={det.logo}/>
                            {det.name}

                      </div>

                            </>
                    )
                })
            }

        </Marquee>
    </div>
  )
}

export default TouristSpots