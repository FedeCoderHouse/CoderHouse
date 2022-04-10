import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
//pages
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import Nosotros from './pages/Nosotros'
import NotFoundPage from './pages/NotFound'
//import DetailPage from './pages/Detail';
import ItemDetail from './components/ItemDetail/ItemDetail'
import { CartProvider } from './context/CartContext';

function App() {

  return (
    //JSX
    
    <div className="App">
    {/* <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/contacto" element={<ContactPage />}/>
        <Route path="/productos" element={<HomePage />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/:category/:id" element={<ItemDetail />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter> */}
    

    <CartProvider>

          <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/:category/" element={<HomePage />}/>
            <Route path="/contacto" element={<ContactPage />}/>
            <Route path="/productos" element={<HomePage />}/>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/:category/:id" element={<ItemDetail />}/>
            <Route path="*" element={<NotFoundPage />}/>
            </Routes>
          </BrowserRouter>

      </CartProvider>

    </div>
  );
}

export default App;