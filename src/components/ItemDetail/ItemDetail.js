import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import mockProductos from '../../Utils/productsMock';
import ItemCount from '../ItemCount/ItemCount';

import CartContext from '../../context/CartContext'

import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebase';

const ItemDetail = () => {
 
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()


    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
            navigate('/error')
          }
    }


    useEffect( () => {

        getProduct()
    }, [id])


    


    
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
                <div style={{marginLeft: '28%'}}>
                <ItemCount stock={product.stock} initial={product.initial} product={product}></ItemCount>
                </div>
                
                
            </div>
            </div>
        </Container>
    )
}

export default ItemDetail