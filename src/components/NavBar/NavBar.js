import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import ChairTwoToneIcon from '@mui/icons-material/ChairTwoTone';
import { brown } from '@mui/material/colors';

function NavBar(props) {
    //console.log(props)
    const pages = [
    {
        title:'Home',
        url: '/'
    },
    {
        title:'Nosotros',
        url: '/nosotros'
    }, 
    {
        title: 'Productos',
        url: '/productos'
    },
    {
        title: 'Contacto',
        url: '/contacto'
    }]
    return(
        //JSX
        <header>
            <div className='navbar' sx={{ bgcolor: brown[300] }}>
            <ChairTwoToneIcon fontSize="large" className="zoom" sx={{ color: brown[500], marginLeft: 5 }}/>
            
            <ul>
                    <li>
                        <Button sx={{ color: brown[500] }} className="custom-btn" variant="outlined">
                            <Link to={'/sillones'}>Sillones</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn" variant="outlined">
                            <Link to={'/sillas'}>Sillas</Link>
                        </Button>     
                    </li>
                    
                {pages.map((page) => {
                    return(
                        <li>
                            <Button className="custom-btn" variant="outlined">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                    )
                })}

            </ul>
            <CartWidget />
            </div>
        </header>
    )
}

export default NavBar