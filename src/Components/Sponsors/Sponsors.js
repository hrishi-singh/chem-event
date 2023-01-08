import React from 'react'
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import sponsorList from './sponsors_List.json';
import './Sponsors.css'
const Sponsors = () => {
  return (
    <div className="container my-3" id="sponsorcontainer">
    <h1>Our Sponsors</h1>
    <Row xs={1} md={3} className="g-4">
      {sponsorList.sponsors.map((det) => (
        <Col>
          <Card className='sponsporCards'>
            <Card.Img variant="top" src={det.logo} height="120px"/>
            <Card.Body>
            </Card.Body>
            <h5>{det.Name}</h5>
            <h6>{`(${det.Role})`}</h6>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    // <ComingSoon title={`Sponsors`}/>
  )
}
export default Sponsors