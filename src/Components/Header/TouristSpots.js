import React from 'react'
import Carousel from 'react-elastic-carousel';
import tp from './touristspots.json';
import './TouristSpots.css';
// import Cards from '../Cards';
const breakpoints =[
    { itemsToShow: 4}
]

const TouristSpots = () => {      
  return (
    <div>
        <h1>Places to Visit at Jodhpur</h1>
     <Carousel breakPoints={breakpoints} enableAutoPlay={true}>
        {
        tp.places.map(item => <div key={item.img} className="spots-slideshow"><img src={item.img} alt="" /><dir>{item.name}</dir></div>)}
      </Carousel>
    </div>
  )
}

export default TouristSpots