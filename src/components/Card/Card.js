import React,{ useState } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import Button from '@mui/material/Button';
import { brown } from '@mui/material/colors';
import { Link } from 'react-router-dom'

export default function Card({ data }) {
    const { title, price, stock, image, initial, id } = data

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

    return(
        <div className="card-item">
            <Link to={`/productos/${id}`}>
                <img src={`./${image}`} alt={image} />           
                <div className='container-card-data'>
                    <h2>{title}</h2>
                    <p>Precio : $ {price}</p>
                    {/* <div display="inline-block">
                        <ItemCount stock={ stock } initial={ initial }/>
                    </div> */}
                    <Button sx={{ color: brown[500] }}>Comprar</Button>
                </div>
            </Link>
        </div>
    )
}