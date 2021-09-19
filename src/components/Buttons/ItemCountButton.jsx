import React, { useState } from 'react';
import { ButtonToggle } from 'reactstrap';

export default function ItemCountButton () {
    const [count, setCount] = useState ( 0);
    const [rest, setRest] = useState ( 0);

    const handleOnClick = () => {
        setCount (count +1);
        setRest (rest -1 >0 );
    }
    

    return(
        <>
        <div className= "count+">
        <p> Cantidad: { count } </p>
        <ButtonToggle color="success" onClick = { handleOnClick }>+</ButtonToggle>{handleOnClick}
        <ButtonToggle color="danger"  onClick = {handleOnClick}>-</ButtonToggle>

        </div>
        



        </>
    )
    
}
// const detectarBotones = (data) => {
//     const botones = document.querySelectorAll('.card button')

//     botones.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // console.log(btn.dataset.id)
//             const producto = data.find(item => item.id === parseInt(btn.dataset.id))
//             producto.cantidad = 1
//             if (carrito.hasOwnProperty(producto.id)) {
//                 producto.cantidad = carrito[producto.id].cantidad + 1
//             }
//             carrito[producto.id] = { ...producto }
//             // console.log('carrito', carrito)
//             pintarCarrito()
//         })
//     })
// }
