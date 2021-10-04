
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ReserveBtn from '../Buttons/ReserveBtn';
import { 
  NavBtn,
  NavBtnLink,       
} from '../NavBar/ElementsNavBar';

export default function Item ({destination}) {
return (
    <>
    
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
        {/* <ListGroupItem> Fecha: { destination.date }         </ListGroupItem> */}
        <ListGroupItem> Ubicación: { destination.location}  </ListGroupItem>
        <ListGroupItem> Precio: $ { destination.price}      </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <center>
        <NavBtn>
              <NavBtnLink to={`/destination/${destination.id}`}>Reserva tu lugar!!</NavBtnLink>
          </NavBtn>         
        </center>
      </Card.Body>
    </Card>
    </div>
    </div> 
    </>
      )
   
    
}