import React, {useContext} from 'react';
import { CartContext } from '../CartContext';
import CartItem from '../components/CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = () => {

    const { cart, totalPrecio, vaciarCarrito } = useContext (CartContext);

    const mostrarProductos = () => {
        return (
            cart.map ((prod) => {
                return(
                    <CartItem item={prod} key={prod.id}/>
                )
            })
        )
    }

    const carritoVacio = () => {
        return (
            <Link to='/productos'><p>El carrito esta vacio, para descubrir los productos haga click.</p></Link>
        )
    }
    return (
        <div>
            <h3>Tu carrito</h3>
            {
                cart.length > 0 ? <div><button onClick={() => vaciarCarrito()}>Vaciar carrito</button><div> {mostrarProductos()} </div></div> : carritoVacio()
            }
            {
                totalPrecio() !== 0 && `Total: ${totalPrecio()}`
            }
        </div>
    )
}

export default Cart;