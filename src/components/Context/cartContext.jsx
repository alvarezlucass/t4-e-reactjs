import { createContext, useState, useContext } from 'react';

const cartContext = createContext ()

export const useCartContext = () => useContext (cartContext)


export const CartContext = ({ children }) => {
    
    const [ cartList, setCartList] = useState ([])
    //addDest=agregar destino
    
    const addDest = ( dest, qty ) => {
        const index = cartList.findIndex (i => i.dest.id === dest.id)

        if ( index > -1) {
            const oldQy = cartList[index].quantity
            cartList([...cartList, { dest: dest, quantity: qty + oldQy}])
        }else {
            setCartList ([...cartList, { dest: dest, quantity: qty}])
        }
    }
    //deleteFromCart= borrar producto
    const deleteFromCart = (dest) => {
        const deleteProd = cartList.filter ((prod)=> prod.dest.id !== dest.dest.id);
        setCartList([...deleteProd])
    }
    //
    const iconCart = () => {
        return cartList.reduce (( acum, valor) => acum + valor.quantity, 0)
    }
    //totalPrice= precio total
    const totalPrice = () => {
        return cartList.reduce (( acum, valor) => (acum + (valor.quantity * valor.dest.price)),0)
    }

    //emptyCart=Vaciar carrito
    const emptyCart=()=>{
        setCartList([])
    }
    console.log(cartList);
    return (
        <cartContext.Provider value={{
            cartList,
            addDest,
            emptyCart,
            deleteFromCart,
            iconCart,
            totalPrice,
        }}>
            { children }
        </cartContext.Provider>
    )
}