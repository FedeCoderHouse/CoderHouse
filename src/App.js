import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
//pages
import HomePage from './pages/Home'

import NotFoundPage from './pages/NotFound'
import DetailPage from './pages/Detail';

function App() {
  return (
    //JSX
    
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/:category/:id" element={<DetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;