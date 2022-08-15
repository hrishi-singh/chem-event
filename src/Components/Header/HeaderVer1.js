import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from '../About/About';
import './Header.css';
import Welcome from './Slider1.js'
import HoD from './Slider2.js'

 const Header = () => {


  return (
    // code for Header Welcome 
    <>
    <Carousel className='slides'>
      <div><Welcome/></div>
      <div><HoD/></div>
    </Carousel>
    <About/>
    </>
  )
}

export default Header
