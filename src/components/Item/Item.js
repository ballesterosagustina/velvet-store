import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom'

const Item = ({item}) => {
    return(
        <Link to={`/Detail/${item.id}`}>
            <div className='item-producto'>
                <img src={item.picture} alt={item.alt}/>
                <h2 className='item-producto-title'>{item.title}</h2>
                <p className='item-producto-price'>${item.price}</p>
                <p className='item-producto-stock'>Stock disponible: {item.stock}</p>
                {/*<button className='item-producto-boton'>Agregar</button>)*/}
            </div>
        </Link>
    )
}

export default Item;