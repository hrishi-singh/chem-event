import React,{useEffect} from 'react'
import Tilt from 'react-parallax-tilt';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards(props) {
    useEffect(() => {
        Aos.init();
        }, [])

    let dir = props.por;
    let mapping = dir.map((det) => {
        return (
            <div className={`col-md-${(props.colm)}`} key={det.phone}>
               
                <CardGroup>
                    <Tilt>
                        <Card className={props.className} data-aos="flip-left" data-aos-delay="200">
                            <Card.Img variant="top" height="220px" src={!(det).img ? "https://www.cumbria.ac.uk/media/staff-profile-images/staff_profile_-generic_350x350px.png" : det.img} />
                            <Card.Body>
                                <Card.Title>{det.Name}</Card.Title>
                                <Card.Text>
                                    <b>{det.position}</b><br />
                                    {det.bio}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </CardGroup>
            </div>
        )
    })
  return (
    <div className="row">
            <h3 className="container my-3">{props.title}</h3>
            {mapping}
        </div>
  )
}

export default Cards
Cards.defaultProps = {
    className:"Card"
}