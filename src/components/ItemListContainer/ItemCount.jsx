import React, { useState } from 'react';
import { ButtonToggle } from 'reactstrap';

export default function ItemCount () {
    const [count, setCount] = useState ( 0);
    const [rest, setRest] = useState ( 1);

    const handleOnClick = () => {
        setCount (count +1);
    }
    

    return(
        <>
        <div className= "count+">
        <p> Cantidad: { count }</p>
        <ButtonToggle color="success" onClick = { handleOnClick }>+</ButtonToggle>{handleOnClick}
        <ButtonToggle color="danger">-</ButtonToggle>{handleOnClick}

        </div>
        



        </>
    )
    
}
