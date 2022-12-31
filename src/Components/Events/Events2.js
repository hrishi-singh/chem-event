import React from 'react'
import Cards from '../Cards';
import event_List from './events-list.json';
import './Events2.css';
import { useAuth } from "../contexts/AuthContext";


const Events2 = () => {
  const currentUser = useAuth();
  return (
  <div id='eventsBody'>
     <section id="thumbnail">
            <div className="box">
                <h1>Events</h1>
            </div>
            <h3>Total Prize Worth:</h3>
            <h2> 35K</h2>
            <a href='https://drive.google.com/file/d/1jV7vvCD97wP4hw0ZniwjdZi3xgKRwgpT/view?usp=sharing' target="#">View All Events Schedule</a>
    <div className='Events__instruction'>

            {currentUser.currentUser==null?<h5 ><br/>Kindly login to apply for Competitions / Presentation </h5>:<h5 ><br/>Fill the Respective Events Form Here</h5>}
    </div>
        </section>
        <section id='eventslists'>
        <Cards title={"Aarambh"} por={event_List.AARAMBH} colm={6} tilt={false}  className={'eventcard my-3'}/>
        <Cards title={"Lecture Series"} por={event_List.Keynote} colm={12} tilt={false}  className={'eventcard my-3 eventTitle'}/>
        <Cards title={""} por={event_List.LectureSeries} colm={4} tilt={false} className={'eventcard my-3 eventTitle'}/>
        <Cards title={"Poster Presentation"} por={event_List.PosterPresentation} rulebookbtn={true} btn={currentUser.currentUser!=null?true:false} tilt={false} colm={6} className={'eventcard my-3 eventTitle'}/>
        <Cards title={"Events/Competitions"} por={event_List.EventsCompetitions} rulebookbtn={true} btn={currentUser.currentUser!=null?true:false} tilt={false} colm={6} className={'eventcard my-3 eventTitle'}/>
        <Cards title={"Informals"} por={event_List.Informals}rulebookbtn={true}  tilt={false} colm={12} className={'eventcard my-3 eventTitle'}/>
        </section>

  </div>
  )
}

export default Events2
