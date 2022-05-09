import React,{useState, useContext} from 'react'
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext'
import './ItemCount.css'

const ItemCount = ({stock, initial=1, product}) => {
    const [count, setCount] = useState(initial)

    const onAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const onDecrease = () => {
      if(count > initial) {
          setCount(count - 1)
      }
  }

  const { cartProducts, addProductToCart } = useContext(CartContext)

  const addToCart = (e) => {
      e.stopPropagation()  
      console.log("Productos agregados:", cartProducts) 
          addProductToCart(product, count)
  }

    return(
        <>
            <button className='alineados tamanio-boton' onClick={onDecrease}>-</button>
            <p className='alineados tamanio-boton'>{count}</p>
            <button className='tamanio-boton' onClick={onAdd}>+</button>

            <Button onClick={addToCart} className='detail__btn-buy'>COMPRAR</Button>
        </>
    )
}

export default ItemCount