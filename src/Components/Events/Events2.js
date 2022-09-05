import React from 'react'
import Cards from '../Cards';
import event_List from './events-list.json';
import './Events2.css'
const Events2 = () => {
  return (
  <div>
     <section id="thumbnail">
            <div className="box">
                <h1>Events</h1>
            </div>
        </section>
        <section>
        <Cards title={"Aarambh"} por={event_List.AARAMBH} btn={false} colm={6} tilt={false} className={'eventcard my-3'}/>
        <Cards title={"Lecture Series"} por={event_List.LectureSeries} btn={false} colm={4} tilt={false} className={'eventcard my-3'}/>
        <Cards title={"Poster Presentation"} por={event_List.PosterPresentation} btn={true} tilt={false} colm={6} className={'eventcard my-3'}/>
        <Cards title={"Events/Competitions"} por={event_List.EventsCompetitions} btn={false} tilt={false} colm={4} className={'eventcard my-3'}/>
        <Cards title={"Prize Distribution"} por={event_List.ClosingRemarks} btn={false} colm={6} tilt={false} className={'eventcard my-3'}/>
        </section>

        
  </div>
  )
}

export default Events2