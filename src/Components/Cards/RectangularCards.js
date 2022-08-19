import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const RectangularCards = (props) => {
    let list=props.arr;
    let mapping=list.map((det)=>{
        return(
            <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={det.logo?det.logo:det.img} />
            <Card.Body>
              {det.text}
            </Card.Body>
          </Card>
        </Col>
        </Row>
        )
    })
  return (
    <div>
        {mapping}
    </div>
  )
}

export default RectangularCards