import React from 'react'
import Cards from '../Cards';
import event_List from './events-list.json';
import './Events2.css';
const Events2 = () => {
  return (
  <div>
     <section id="thumbnail">
            <div className="box">
                <h1>Events</h1>
            </div>
            <h3>Total Prize Worth <img src="" alt="" />:</h3>
            <h2> 35K</h2>
            <a href='https://drive.google.com/file/d/1jV7vvCD97wP4hw0ZniwjdZi3xgKRwgpT/view?usp=sharing' target="#">View All Events Schedule</a>
        </section>
        <section id='eventslists'>
        <Cards title={"Aarambh"} por={event_List.AARAMBH} btn={false} colm={6} tilt={false} className={'eventcard my-3'}/>
        <Cards title={"Lecture Series"} por={event_List.LectureSeries} btn={false} colm={4} tilt={false} className={'eventcard my-3 eventTitle'}/>
        <Cards title={"Poster Presentation"} por={event_List.PosterPresentation} btn={true} tilt={false} colm={6} className={'eventcard my-3 eventTitle'}/>
        <Cards title={"Events/Competitions"} por={event_List.EventsCompetitions} btn={true} tilt={false} colm={6} className={'eventcard my-3 eventTitle'}/>
        <Cards title={"informals"} por={event_List.Informals} btn={false} tilt={false} colm={12} className={'eventcard my-3 eventTitle'}/>
        </section>

        
  </div>
  )
}

export default Events2
