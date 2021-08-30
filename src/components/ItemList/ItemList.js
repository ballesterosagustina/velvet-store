import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({items}) =>{
    return (
        <div className='productos-container'>
            {items.map( (elemento) => <Item item={elemento} />)}
        </div>
    )
}

export default ItemList;