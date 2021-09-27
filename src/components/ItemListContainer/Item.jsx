
// import { useContext } from 'react'
// import {Link} from 'react-router-dom'
// import { Container } from 'reactstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ReserveBtn from '../Buttons/ReserveBtn';

export default function Item ({destination}) {
return (
    <>
    
    {/* destinations.map(destination=>  */}
      <div key={ destination.id } >
      <div className="card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = { destination.img} />
      <Card.Body>
        <Card.Title> { destination.title }</Card.Title>
        <Card.Text>
          {destination.description}          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem> Nivel: { destination.level }        </ListGroupItem>
        <ListGroupItem> Fecha: { destination.date }         </ListGroupItem>
        <ListGroupItem> Ubicación: { destination.location}  </ListGroupItem>
        <ListGroupItem> Precio: $ { destination.price}      </ListGroupItem>
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