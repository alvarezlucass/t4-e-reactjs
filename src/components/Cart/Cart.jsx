import { Link } from 'react-router-dom'
import CartCountButton from '../Buttons/CartCountButton'
import { useCartContext } from '../Context/cartContext'

 const Cart = ({ condition = true }) => {
    

    const {cartList, deleteFromCart, iconCart, emptyCart} = useCartContext()



    return (
            <>
            { cartList.length === 0 ?
                <div>
                    <h1>Carrito vacio</h1>
                        <Link to='/'>Agregar Destinos</Link>
                </div>
                :
                <div>
                {/* falta ver si item y name corresponden */}
                {cartList.map(resp => <h2>{resp.destination.level}</h2>)}
                </div>
            }            
                <CartCountButton />
                
            </>
        )
    

}
export default Cart
