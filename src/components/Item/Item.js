import React from 'react';
import './Item.css';

const Item = ({producto}) => {
    return(
        <div className='item-producto'>
            <img src={producto.picture} alt={producto.alt}/>
            <h2 className='item-producto-title'>{producto.title}</h2>
            <p className='item-producto-price'>${producto.price}</p>
            <p className='item-producto-stock'>Stock disponible: {producto.stock}</p>
            <button className='item-producto-boton'>Agregar</button>
        </div>
    )
}

export default Item;