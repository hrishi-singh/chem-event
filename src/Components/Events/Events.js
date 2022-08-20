import React from 'react'
import './Events.css'
import RectCard from '../Cards/RectangularCards'
import List from './events-list.json'
const Events = () => {
  return (
    <div>
        <section className='event-header'>
            <h1>Events</h1>
        </section>
    <div className='aarambh' >
          <RectCard arr={List.AARAMBH}/>
    </div>
        </div>
  )
}
export default Events