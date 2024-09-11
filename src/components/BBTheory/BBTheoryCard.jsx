import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import "./BBTstyle.css"
import { data } from "../../helpers/data";

const BBTheoryCard = ({ bbt }) => {
  const [show, setShow] = useState(true);

  return (
    <Col xs={10} sm={8} md={6} lg={4} className='genel' >
      <Card className='Bbt-card' onClick={() => setShow(!show)} role="button">
        {show ? (
          <Card.Img
            variant='top'
            title={bbt.name}
            src={bbt.image}
          />
         
        ) : (
          <>
            <Card.Header>
              <Card.Title>{bbt.name}</Card.Title>
            </Card.Header>
            <ul className='m-auto ps-0'>
              {bbt.bilgi.map((item, index) => (
                <li key={index}className="list-unstyled  text-start"> <br/>  {item} </li>
              ))}
            </ul>
         
          </>
        )}
      </Card>
    

      <a href={bbt.link} target="_blank" rel="noopener noreferrer">
        <button className="btn">En Komik Sahneler</button>
      </a>

      
    </Col>
  );
}

export default BBTheoryCard;
