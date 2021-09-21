import { createContext, useState, useContext } from 'react';

const cartContext = createContext ()

export const useCartContext = () => {
    return useContext (cartContext)
}
export const CartContext = ({ children }) => {
    const [ cartList, setCartList] = useState ([])

    function addDest ( destNew){
        setCartList ( [...cartList, destNew] )
    }
    return (
        <cartContext.Provider value={{
            cartList,
            addDest,
        }}>
            { children }
        </cartContext.Provider>
    )
}