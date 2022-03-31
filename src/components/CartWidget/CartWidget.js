import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return (
      <div className='carrito-contenedor'>
          <ShoppingCartIcon fontSize="large" className="carrito"></ShoppingCartIcon>
      </div>
    );
  }

export default CartWidget;