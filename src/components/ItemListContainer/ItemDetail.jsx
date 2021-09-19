import React from 'react';
import ItemCountButton from '../Buttons/ItemCountButton';

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { 
    NavBtn,
    NavBtnLink,       
} from '../NavBar/ElementsNavBar';


export const ItemDetail = (dest) => {
    return (
        <>
        <Card>
        <CardBody>
          <CardTitle tag="h5">{dest.location}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{dest.level}</CardSubtitle>
        </CardBody>
        <img width="100%" src={dest.img} alt="Card image cap" />
        <CardBody>
          <CardText>{dest.description}</CardText>
          <ItemCountButton />
          <center>
        <NavBtn>
            <NavBtnLink to={`/destination/${dest.id}`}>Reserva tu lugar!!</NavBtnLink>
        </NavBtn>          
        </center>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
        

         <ItemCountButton />
 
        </>
    )
}
