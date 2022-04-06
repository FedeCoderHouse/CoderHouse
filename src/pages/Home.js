import ListProducts from '../components/ListProducts/ListProducts';
//import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Container from '@mui/material/Container';

const HomePage = () => {
    return (
        <Container className='container-general'> 
            <ListProducts />
        </Container>
    )
}

export default HomePage;