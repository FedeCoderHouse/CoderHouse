import React,{ useState, useEffect, useContext } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import Button from '@mui/material/Button';
import { brown } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom'

import CartContext from '../../context/CartContext'

export default function Card({ data, action }) {
    const { title, price, stock, image, initial, id, colors, descripcion } = data

    const navigate = useNavigate();
    const { cartProducts, addProductToCart } = useContext(CartContext)

    // useEffect( () => {
    //     console.log("SOLO MONTAJE")
    // },[] )

    // useEffect( () => {
    //     console.log("Siempre que entre en fase ACTUALIZACION")
    // })

    // useEffect( () => {
    //     console.log("SOLO CUANDO CAMBIE COUNT")
    // },[count] )

    // useEffect( () => {
    //     return () => {
    //         console.log("FASE DE DESMONTAJE")
    //     }
    // })

// agregado para mostrar el elemento clickeado por consola + onclick mostrarData
    // const [ unaData, getUnaData ] = useState({data})
    // const mostrarData = () => {
    //     getUnaData(console.log(unaData));
    // }


    const changePage = () => {
        navigate(`/productos/${id}`)
    }
    // const addToCart = (e) => {
    //     e.stopPropagation()  
    //     console.log("Productos agregados:", cartProducts) 
    //     addProductToCart(data)
    // }


    return(
        <div className="card-item" onClick={changePage}>
                <div className='card-item__img'>
                    <img src={`./${image}`} alt={image} />
                </div>
                <div className='container-card-data'>
                    <h2>{title}</h2>
                    <p>Precio : $ {price}</p>
                    {/* <Button onClick={addToCart} className="btn-custom">Comprar</Button> */}
                </div>
        </div>

        

    )
}