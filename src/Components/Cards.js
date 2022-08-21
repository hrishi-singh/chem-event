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
    let tilt=props.tilt;
    let mapping = dir.map((det) => {
        return (
            <div className={`col-md-${(props.colm)}`} key={props.keyval}>
               
                <CardGroup>
                    {tilt?  <Tilt>
                        <Card className={props.className} data-aos="flip-left" data-aos-delay="200">
                            <Card.Img variant="top" height="220px" src={!(det).img ? "https://www.cumbria.ac.uk/media/staff-profile-images/staff_profile_-generic_350x350px.png" : det.img} />
                            <Card.Body>
                                <Card.Title>{det.Name}</Card.Title>
                                <Card.Text>
                                    <b>{det.position || det.text}</b><br />
                                    {det.bio || det.link}
                                </Card.Text>
                                {props.btn?
            <><div className="btn-group mx-3">
                                        <a href="/" className="btn btn-primary" aria-current="page">RuleBook</a>
                                    </div><div className="btn-group mx-3">
                                            <a href="/" className="btn btn-primary">Registration Form</a>
                                        </div></>:false}
                            </Card.Body>
                        </Card>
                    </Tilt>:
                     <Card className={props.className} data-aos="flip-left" data-aos-delay="200">
                     <Card.Img variant="top" height="220px" src={!(det).img ? "https://www.cumbria.ac.uk/media/staff-profile-images/staff_profile_-generic_350x350px.png" : det.img} />
                     <Card.Body>
                         <Card.Title>{det.Name}</Card.Title>
                         <Card.Text>
                             <b>{det.position || det.text}</b><br />
                             {det.bio}
                         </Card.Text>
                         {props.btn?
     <><div className="btn-group mx-3">
                                 <a href="/" className="btn btn-primary" aria-current="page">RuleBook</a>
                             </div><div className="btn-group mx-3">
                                     <a href={`${det.link}`} target="__blank" className="btn btn-primary">Registration Form</a>
                                 </div></>:false}
                     </Card.Body>
                 </Card>
                    }
                  
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
    className:"Card",
    keyval:"img",
    btn:false,
    tilt:true
}