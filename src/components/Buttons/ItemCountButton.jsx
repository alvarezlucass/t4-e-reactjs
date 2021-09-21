import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToggle } from 'reactstrap';
import { 
    BtnToggle,
    BtnToggleViolet,
    BtnToggleGreen,       
  } from '../NavBar/ElementsNavBar';

export default function ItemCountButton ({stock, initial, onAdd}) {
    const [count, setCount] = useState ( initial);
    const [changeBtn, setChangeBtn] = useState (true);

    function add () {
        if (count < stock) {
            setCount (count + 1)
        }
    }
    function beef () {
        if ( count > 1 ) {
            setCount (count - 1)
        }
    }
    const addCart =()=> {
        onAdd (count)
        setChangeBtn (false)
    }

    return(
        <>        
        <p> Cantidad: { count } </p>
        <ButtonToggle color="success" onClick = { add }>+</ButtonToggle>
        <ButtonToggle color="danger"  onClick = {beef}>-</ButtonToggle><br/>
        {changeBtn ?
            <BtnToggle onClick = {addCart}>Reserva YA!</BtnToggle>
            :
            <div>
                <Link to="/cart">
                    <BtnToggleViolet>Terminar la Compra</BtnToggleViolet>
                </Link>
                <Link to="/">
                    <BtnToggleGreen>Agrega mas Destinos</BtnToggleGreen>
                </Link>
            </div>

        }


        
        



        </>
    )
    
}
