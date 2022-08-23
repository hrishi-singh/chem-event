import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from '../About/About';
import './Header.css';
import Spots from './TouristSpots'
import Welcome from './Slider1.js'
import Presentation from './Slider2.js'

 const Header = () => {


  return (
    // code for Header Welcome 
    <>
      <div><Welcome EventName="Chem-E-Sorption" /></div>
    <About EventName="Chem-E-Sorption"/>
    <Spots/>
    {/* <Carousel className='slides'>
      <div><Presentation/></div>
    </Carousel> */}
    </>
  )
}

export default Header
