
// import { useContext } from 'react'
// import {Link} from 'react-router-dom'
// import { Container } from 'reactstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ReserveBtn from '../Buttons/ReserveBtn';

export default function Item ({destinations}) {
return (
    <>
    
      <div key={ destinations.id } >
      <div className="card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = { destinations.img} />
      <Card.Body>
        <Card.Title> { destinations.title }</Card.Title>
        <Card.Text>
          {destinations.description}          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem> Nivel: { destinations.level }        </ListGroupItem>
        <ListGroupItem> Fecha: { destinations.date }         </ListGroupItem>
        <ListGroupItem> Ubicación: { destinations.location}  </ListGroupItem>
        <ListGroupItem> Precio: $ { destinations.price}      </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <center>
        <ReserveBtn />          
        </center>
      </Card.Body>
    </Card>
    </div>
    </div> 
    </>
      )
   
    
}