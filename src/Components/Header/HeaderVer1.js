import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from '../About/About';
import './Header.css';
import Spots from './TouristSpots'
import Welcome from './Slider1.js'

 const Header = () => {


  return (
    <>
    <div><Welcome EventName="Chem-E-Sorption" /></div>
    <About EventName="Chem-E-Sorption"/>
    <Spots/>
    </>
  )
}

export default Header
