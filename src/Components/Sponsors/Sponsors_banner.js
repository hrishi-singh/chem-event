import React from 'react'
import Marquee from 'react-fast-marquee'
import sponsors_List from './sponsors_List.json'
function Sponsors_banner() {
  return (
    <div>
    {/* <span className="d-flex justify-content-center align-items-center">Our Sponsors</span> */}
    <div className='banner'>
        <Marquee pauseOnHover={true} speed={40} gradientColor={[39,78,93]}>
            {
                sponsors_List.sponsors.map((det)=>{
                    return(
                            <img src={det.logo} alt={det.Name} key={det.logo} className='sponsors_logo'/>
                    )
                })
            }

        </Marquee>
        </div>
    </div>
  )
}

export default Sponsors_banner