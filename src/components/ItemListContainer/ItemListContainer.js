import React from 'react';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';

import './ItemListContainer.css';


export default function ItemListContainer () {
    return (
    // <div className="card">
    //   <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //   <Card.Body>
    //     <Card.Title>Junin- Prov. de Bs As</Card.Title>
    //     <Card.Text>
    //       Recorreremos las afueras de la Ciudad de Junin, por caminos y cenderos desconocidos.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroupItem>Nivel Intermedio</ListGroupItem>
    //     <ListGroupItem>25km minimo de recorrido</ListGroupItem>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Reserva tu Lugar</Card.Link>
    //     <Card.Link href="#">Ver Recomendaciones</Card.Link>
    //   </Card.Body>
    // </Card>
    // </div> 
    <div className='card2'>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_620386-MLA44170197769_112020-O.webp" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://ecologiahoy.net/wp-content/uploads/2020/02/paisajes-natutrales-ecologiaverde-1.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        {/* <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card> */}
      </CardGroup>
      </div>
    );
}