import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';


import './ItemListContainer.css';
import { getFetch } from '../utils/Mocks';
import {useEffect, useState} from 'react';
// import { VscLoading } from 'react-icons/fa';


export default function ItemListContainer () {
  
    const [destinations, setDestinations] = useState([])
    const [loading, setLoading] = useState(true)
       
    useEffect(() => {
        getFetch
        .then(res => {
            setDestinations(res)
            setLoading(false)
        })
          
       
    }, [])
        
  // console.log(personas)
  return (
    <>
    { loading ?
      // <Spinner animation="border" />
      <Spinner animation="grow" />
      // <h2> <VscLoading /> </h2>
      // <h2>Cargando ...</h2>
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
      <ListGroupItem> Nivel { destination.level }</ListGroupItem>
        <ListGroupItem> Fecha { destination.date }</ListGroupItem>
        <ListGroupItem>  $ { destination.location} </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <center>
          <Button variant="primary" size="lg" active>
          Reserva tu Lugar
          </Button>{' '}
          <Button variant="secondary" size="lg" active>
          Ver Recomendaciones
          </Button>
        {/* <Card.Link href="#">Reserva tu Lugar</Card.Link> */}
        {/* <Card.Link href="#">Ver Recomendaciones</Card.Link> */}
        </center>
      </Card.Body>
    </Card>
    </div>
    </div> 
    // {<div className='card2'>
    //     <CardGroup>
    //     <Card>
    //       <Card.Img variant="top" src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/121621446_102624521631022_8205447502512644030_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEsbbywo_07kc73lLayRuP1UfVa7J4QOr5R9VrsnhA6vtOj9FfyhBuKU6iajPUzJ0Q&_nc_ohc=MeF7oxxaClsAX_SmxS0&_nc_ht=scontent.feze11-1.fna&oh=e8f218c9e3b63058908ee56506602813&oe=6158588E" />
    //       <Card.Body>
    //         <Card.Title>Card title</Card.Title>
    //         <Card.Text>
    //           This is a wider card with supporting text below as a natural lead-in to
    //           additional content. This content is a little bit longer.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Last updated 3 mins ago</small>
    //       </Card.Footer>
    //     </Card>
    //     <Card>
    //       <Card.Img variant="top" src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/240776080_5857659417637435_6100603155721806121_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeEQR5iC8MZdzj9e2MRxqqjhZEyE5uF0Vr5kTITm4XRWvjKJ3OrbRpyuUoWbxUMhVHA&_nc_ohc=0uhUI49hRrkAX8Iz52u&_nc_ht=scontent.feze11-1.fna&oh=dcb2286be62ed9e3417ed83e12200f2f&oe=6157B1FB" />
    //       <Card.Body>
    //         <Card.Title>Card title</Card.Title>
    //         <Card.Text>
    //           This card has supporting text below as a natural lead-in to additional
    //           content.{' '}
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Last updated 3 mins ago</small>
    //       </Card.Footer>
    //     </Card>
        // <Card>
        //   <Card.Img variant="top" src="holder.js/100px160" />
        //   <Card.Body>
        //     <Card.Title>Card title</Card.Title>
        //     <Card.Text>
        //       This is a wider card with supporting text below as a natural lead-in to
        //       additional content. This card has even longer content than the first to
        //       show that equal height action.
        //     </Card.Text>
        //   </Card.Body>
        //   <Card.Footer>
        //     <small className="text-muted">Last updated 3 mins ago</small>
        //   </Card.Footer>
        // </Card>
      // </CardGroup>
      // </div>
      )
    }
    </>
  )
    
}