import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Spinner from 'react-bootstrap/Spinner';




import './StyleItemListContainer/ItemListContainer.css';
import { getFetch } from '../utils/Mocks';
import {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';
import { 
  NavBtn,
  NavBtnLink,       
} from '../NavBar/ElementsNavBar';

// import { VscLoading } from 'react-icons/fa';


export default function ItemListContainer () {
  
    const [destinations, setDestinations] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
       
    useEffect(() => {

      if (idCategory) {
        getFetch
        .then(res => {
            setDestinations(res.filter(dest=>dest.level===idCategory))
            
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

      } else {
        getFetch
        .then(res => {
            setDestinations(res)
            // setLoading(false)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }
        
          
       
    }, [idCategory])

    console.log(idCategory)
        
  return (
    <>
    { loading ?
      <Spinner animation="grow" />
      :
      destinations.map(destination=> 
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
        <NavBtn>
            <NavBtnLink to='/destination/idDestination'>Reserva tu lugar!!</NavBtnLink>
        </NavBtn>          
        </center>
      </Card.Body>
    </Card>
    </div>
    </div> 
    
      )
    }
    </>
  )
    
}
