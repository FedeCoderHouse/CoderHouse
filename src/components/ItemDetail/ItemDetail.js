import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProductos from '../../Utils/productsMock';

const ItemDetail = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProductos, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img' style={{display: "inline-block"}}>
                <img src={"../" + product.image} alt="silla" />
            </div>
            <div className='container-detail__info' style={{display: "inline-block"}}>
                <h3 className='info__title'>{product.title}</h3>
                <p className='info__text'>$ {product.price}</p>
                <p className='info__subtitle'>COLOR</p>
                <ul className='info__color'style={{display: 'flex'}}>
                    {product.colors?.map( (color) => {
                        return(
                            <li style={{background: `${color.hex}`, width: '20px', height: '20px', marginRight: '20px'}}></li>
                        )
                    })}                    
                </ul>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>{product.descripcion}</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default ItemDetail