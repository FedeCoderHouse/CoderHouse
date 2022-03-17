import React,{ useState } from 'react';

import './Card.css';

export default function Card( data ) {
    const {precio, talle, title} = data;
    const [count, setCount] = useState(1);

    console.log("Fecha actual: ", new Date().toLocaleString())
    console.log("estado Contador: ", count);

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
            <button onClick={removeStock}>Quitar item</button>
            <p>Stock: {count}</p>
            <button onClick={addStock}>Agregar item</button>
        </div>
    )
}
