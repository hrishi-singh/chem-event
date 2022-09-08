import React from 'react'
// import Card from 'react-bootstrap/Card';
import './RectangularCards.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

const RectangularCards = (props) => {
  let list = props.arr;
  let mapping = list.map((det) => {
    return (
      <div className="container my-3">
        <CardGroup>
          <Row xs={1} md={3} className="g-4">
            <Card key={det.img}>
              <Card.Img variant="top" src={det.logo ? det.logo : det.img} />
              <Card.Body>
                {det.text}
              </Card.Body>
            </Card>
          </Row>
        </CardGroup>
      </div>

    )
  })
  return (
    <>
      {mapping}
    </>
  )
}

export default RectangularCards