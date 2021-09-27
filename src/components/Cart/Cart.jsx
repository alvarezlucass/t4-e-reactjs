import React from 'react'
import { useCartContext } from '../Context/cartContext'

 const Cart = ({ condition = true }) => {
    

    const {cartList} = useCartContext()



    return (
            <>
            {/* falta ver si item y name corresponden */}
                {cartList.map(resp => <h2>{resp.item.level}</h2>)}
            </>
        )
    

}
export default Cart
