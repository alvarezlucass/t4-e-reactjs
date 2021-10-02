import { 
    NavBtn,
    NavBtnLink,       
  } from '../NavBar/ElementsNavBar';

  import React from 'react'
  
  export default function ReserveBtn(destinations) {
      return (
          <>
          <center>
          <NavBtn>
              <NavBtnLink to={`/destinations/${destinations.id}`}>Reserva tu lugar!!</NavBtnLink>
          </NavBtn>           
        </center>  
              
          </>
      )
  }
  
 
  