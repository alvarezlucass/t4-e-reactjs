import Button from '@restart/ui/esm/Button'
import firebase from 'firebase';
import 'firebase/firestore';
import CartCountButton from '../Buttons/CleanCountButton'
import ItemCountButton from '../Buttons/ItemCountButton'
import TrashCountButton from '../Buttons/TrashCountButton'
import { useCartContext } from '../Context/cartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../Services/getFirebase'

 const Cart = ({ condition = true }) => {
     const [ cartFormData, setCartformData] = useState ({
         firstName: '',
         lastName: '',
         phone: '',
         email: ''
     })
    

    const {cartList, deleteFromCart, totalPrice, emptyCart, lineTotalPrice} = useCartContext()

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
     let order = {}
     order.date = firebase.firestore.Timestamp.fromDate( new Date());
     order.buyer = cartFormData
     order.total = totalPrice();
     order.destinations = cartList.map(cartItem =>{
         const id = cartItem.i.id;
         const title = cartItem.i.title;
         const price = cartItem.i.price * cartItem.quantity;

            return {id, title, price}

     })

    const db = getFirestore()
    db.collection('orders').add(order)//set .doc
    .then(resp => console.log(resp))


    return (
            <>
            { cartList.length === 0 ?
                <div>
                    <h1>Carrito vacio</h1>
                        <Link to='/'>Agregar Destinos</Link>
                </div>
                :
                <div>
                    {cartList.map(resp => 
                        <div key= { resp.destination.id}>
                        <h2>{resp.destination.description}</h2>
                        <TrashCountButton />
                    </div>
                    )}
                </div>
            }            
                <CartCountButton />
                <ItemCountButton />
                <Button onClick = {handleOnSubmit}>Terminar Compra</Button>
                
                
            </>
        )
    

}
export default Cart
