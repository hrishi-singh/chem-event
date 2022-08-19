import React from 'react'
import './Events.css'
import RectCard from './RectangularCards'
import List from './event-list.json'
const Events = () => {
  return (
    <div>
        <section className='event-header'>
            <h1>Events</h1>
          <RectCard arr={}/>
        </section>
    </div>
  )
}
export default Events