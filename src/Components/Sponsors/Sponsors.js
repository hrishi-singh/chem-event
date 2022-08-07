import React from 'react'
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import ComingSoon from '../ComingSoon/ComingSoon'
import sponsorList from './sponsors_List.json';
import './Sponsors.css'
const Sponsors = () => {
  return (
    <div className="container my-3">
    <h1>Our Sponsors</h1>
    <Row xs={1} md={3} className="g-4">
      {sponsorList.sponsors.map((det) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={det.logo} />
            <Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}
export default Sponsors