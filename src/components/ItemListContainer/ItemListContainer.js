import React,{ useState, useEffect } from 'react';
import Card from '../Card/Card';

const ItemListContainer = () => {

    const [showCard, setShowCard] = useState(true);

    let dateProduct = {
        title: 'Remera',
        talle: 'L',
        precio: 1500
    }
    const hideCard = () => {
        setShowCard(false);
    }

    return(
        <div className="container-cards">
            <Card title='Remera' talle='XL' precio={200}/>
            <Card title='Pantalón' talle='L' precio={500}/>
            <Card title='Camisa' talle='XL' precio={400}/>
        </div>
    )
}
export default ItemListContainer;