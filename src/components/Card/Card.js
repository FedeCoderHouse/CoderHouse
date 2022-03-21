import React,{ useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';

import './Card.css';

export default function Card( data ) {
    const {precio, talle, title} = data;
    const [count, setCount] = useState(1);

    //console.log("Fecha actual: ", new Date().toLocaleString())
    //console.log("estado Contador: ", count);

    useEffect( () => {
        console.log("Siempre que entre en fase de ACTUALIZACIÓN")
    })
    useEffect( () => {
        console.log("Solo MONTAJE")
    }, [])
    useEffect( () => {
        console.log("Solo cuando cambie el COUNT")
    }, [count])
    useEffect( () => {
        return () => {
            console.log("Fase de DESMONTAJE")
            //window.addEventListener("scroll")
        }
    })

    const addStock = () => {
        setCount(count +1)
    }

    const removeStock = () => {
        setCount(count -1)
    }


    return(
        <div className="card-med">
            <h2>{title}</h2>
            <p>Precio: ${precio}</p>
            <p>Talle: {talle}</p>
            <div>
                <button className='alineados tamanio-boton' onClick={removeStock}>-</button>
                <p className='alineados tamanio-boton'>{count}</p>
                <button className='tamanio-boton' onClick={addStock}>+</button>
                <Button size="small" variant="outlined">Agregar al carrito</Button>
            </div>
        </div>
    )
}
