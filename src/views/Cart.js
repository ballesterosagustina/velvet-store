import React, {useContext} from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
    const [cart, setCart] = useContext (CartContext);
    return (
        <div>
            <h1>Carrito</h1>
            <p>Productos: {cart.lenght}</p>
        </div>
    )
}

export default Cart;