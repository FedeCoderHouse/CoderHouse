import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    const mockProductos = [{
        title : 'Silla Uno',
        id: 1,
        price: 1500,
        image: 'Silla1.jpg',
        stock: 3,
        initial: 1
    },
    {
        title : 'Silla Dos',
        id: 2,
        price: 3500,
        image: 'Silla2.jpg',
        stock: 6,
        initial: 2  
    },
    {
        title : 'Silla Tres',
        id: 3,
        price: 1200,
        image: 'Silla3.jpeg',
        stock: 6,
        initial: 4  
    },
    {
        title : 'Silla Cuatro',
        id: 4,
        price: 1200,
        image: 'Silla4.jpg',
        stock: 6,
        initial: 1  
    }
]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        getProducts().then( (productos) => {
            setProducts(productos)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])


    return(
        <div className="container-cards">
            <h2>Sillas</h2>
            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ListProducts;