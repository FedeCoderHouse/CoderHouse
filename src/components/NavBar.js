import Button from '@mui/material/Button';

function NavBar(){
    return (

    <header>
    <img src="logo512.png" className="App-logo" alt="logo" />
    <h1>TiendaUno</h1>
    <div>
        <ul className="navbar">
            <li><Button variant="outlined">Home</Button></li>
            <li><Button variant="outlined">Productos</Button></li>
            <li><Button variant="outlined">Nosotros</Button></li>
            <li><Button variant="outlined">Contacto</Button></li>
        </ul>
    </div>
    </header>
    );
}

export default NavBar;