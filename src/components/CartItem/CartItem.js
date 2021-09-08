import React, {useContext} from 'react';
import { CartContext } from '../../CartContext';

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)

    return (
        <div>
            <p>{item.quantity}</p>
            <h3>{item.title}</h3>
            <button onClick={() => removeItem (item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem