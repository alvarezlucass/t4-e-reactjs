import { 
    NavBtn,
    NavBtnLink,       
  } from '../NavBar/ElementsNavBar';

  import React from 'react'
  
  export default function ReserveBtn( destination ) {
      return (
          <>
          <center>
          <NavBtn>
              <NavBtnLink to={`/destination/${destination.id}`}>Reserva tu lugar!!</NavBtnLink>
          </NavBtn>           
        </center>  
              
          </>
      )
  }
  
 
  