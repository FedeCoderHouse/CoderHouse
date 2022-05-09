import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const addProductToCart = (product, count) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        if(!exist) { 
             
             setCantidad(count)
             setTotalPrice(totalPrice + product.price * count) 
            //setTotalPrice(totalPrice + product.price)
            setCartProducts(cartProducts => [...cartProducts, product])
        }
    }

    const deleteProduct = (product, count) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
        setTotalPrice(totalPrice - product.price * count)
    }

    const data = {
        cartProducts,
        addProductToCart,
        totalPrice,
        deleteProduct,
        cantidad
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext