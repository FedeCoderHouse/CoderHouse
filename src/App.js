
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import NavBarClass from './components/NavBarClass';
// import Card from './components/Card/Card';
// import CardClass from './components/CardClass';
import ListProducts from './components/ListProducts/ListProducts';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
      <div className="App">
          <NavBar/>
          <ItemListContainer>
            <p>Productos relacionados</p>
          </ItemListContainer>
          <ListProducts>
            <p>Productos relacionados</p>
          </ListProducts>
      </div>
    );
  }

export default App;