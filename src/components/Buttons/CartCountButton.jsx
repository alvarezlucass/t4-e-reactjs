import React from 'react';
// import { Link } from 'react-router-dom';
import { GiWaterRecycling } from 'react-icons/gi';
import { FcEmptyTrash } from 'react-icons/fc';
import { useCartContext  } from '../Context/cartContext';



 function CartCountButton () {

    const { emptyCart, deleteFromCart } = useCartContext()


     //EmptyCart = Vaciar Carrito
    

    return (
        <>
        <div className="return">
        <GiWaterRecycling onClick= {()  => emptyCart()} /> <br />
        </div>

        <div className="emptycart">
        
        <FcEmptyTrash onClick= {()  => deleteFromCart()} /> <br />
       

        </div>

        </>
    )
}
export default CartCountButton

