import React from 'react'
import Tilt from 'react-parallax-tilt';
// import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import teams_List from './team-list.json'
import './Core-team.css'

// function for representing teams details as Flashcards
function Flashcards(props) {
    return (
        <CardGroup>
            <Tilt>
                <Card>
                    <Card.Img variant="top" height="220px" src={!(props.det).img ? "https://www.cumbria.ac.uk/media/staff-profile-images/staff_profile_-generic_350x350px.png" : props.det.img} />
                    <Card.Body>
                        <Card.Title> {props.det.Name}</Card.Title>
                        <Card.Text>
                            <h5>{props.det.position}
                                </h5>
                            {props.det.bio}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Tilt>
        </CardGroup>
    );
}



const Team = () => {
    return (
        <div className="container my-3">
            <h1>
                Our Team
            </h1>

            <h3 className="container my-3">Event Faculty Heads</h3>
            <div className="row">
                {
                    teams_List.faculty.map((details) => {
                        return (
                            <div className="col-md-4" key={details.phone}>
                                <Flashcards det={details} />
                            </div>

                        )
                    })
                }

            </div>

            <h3 className="container my-3">Web Developers</h3>
            <div className="row">
                {
                    teams_List.devlopers.map((details) => {
                        return (
                            <div className="col-md-3" key={details.roll}>
                                <Flashcards det={details} />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Team;