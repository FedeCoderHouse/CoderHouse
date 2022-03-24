import React,{useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
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
    return(
        <>
            <button className='alineados tamanio-boton' onClick={onDecrease}>-</button>
            <p className='alineados tamanio-boton'>{count}</p>
            <button className='tamanio-boton' onClick={onAdd}>+</button>
        </>
    )
}

export default ItemCount