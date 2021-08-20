import React from 'react';
import './Item.css';

const Item = ({producto}) => {
    return(
        <div className='item-producto'>
            <img src={producto.pictureUrl} alt={producto.alt}/>
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <p>En stock: {producto.stock}</p>
            <button>Agregar</button>
        </div>
    )
}

export default Item;