import { 
    NavBtn,
    NavBtnLink,       
  } from '../NavBar/ElementsNavBar';

  import React from 'react'
  
  export default function ReserveBtn(dest) {
      return (
          <>
          <center>
          <NavBtn>
              <NavBtnLink to={`/destination/${dest.id}`}>Reserva tu lugar!!</NavBtnLink>
          </NavBtn>           
        </center>  
              
          </>
      )
  }
  
 
  