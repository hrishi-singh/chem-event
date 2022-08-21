import React from 'react'
import 'aos/dist/aos.css';
import teams_List from './team-list.json';
import './Core-team.css';
import Cards from '../Cards';
import { useAuth } from "../contexts/AuthContext";

//code for rendering the core team page
const Team = () => {
    const currentUser = useAuth();
    return (
        <div className="teamcontainer">
            <Cards title={"Patrons"} por={teams_List.patrons} colm={6} className={'teamcard my-3'}/>
            <Cards title={"Co-Patrons"} por={teams_List.copatrons} colm={4} className={'teamcard my-3'}/>
            <Cards title={"Faculty Members"} por={teams_List.Faculties} colm={3} className={'teamcard my-3'}/>
            <Cards title={"Web Developers"} por={teams_List.developers} colm={4} className={'teamcard my-3'}/>
            <Cards title={"Public Relation College Team"} por={teams_List.PublicRelationCollege} colm={4} className={'teamcard my-3'}/>
            <Cards title={"Public Relation Funding Team"} por={teams_List.PublicRelationFunding} colm={4} className={'teamcard my-3'}/>
            <Cards title={"Event Management Team"} por={teams_List.EventManagement} colm={4} className={'teamcard my-3'}/>
        </div>
    )
}

export default Team;
