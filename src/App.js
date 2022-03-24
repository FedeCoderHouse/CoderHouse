
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
// import NavBarClass from './components/NavBarClass';
// import Card from './components/Card/Card';
// import CardClass from './components/CardClass';
import ListProducts from './components/ListProducts/ListProducts';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Container from '@mui/material/Container';

function App() {
    return (
      <div className="App">
          <ResponsiveAppBar/>
          <Container className='container-general'> 
            <ListProducts />
          </Container>
      </div>
    );
  }

export default App;