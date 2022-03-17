
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NavBarClass from './components/NavBarClass';
import Card from './components/Card/Card';
import CardClass from './components/CardClass';
import ListProducts from './components/ListProducts/ListProducts';

function App() {
    return (
      <div className="App">
          <NavBar/>
          <ListProducts>
            <p>Productos relacionados</p>
          </ListProducts>
          <ListProducts>
            <p>Productos relacionados</p>
          </ListProducts>
      </div>
    );
  }

export default App;