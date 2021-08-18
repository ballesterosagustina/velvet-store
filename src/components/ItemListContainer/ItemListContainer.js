import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div className='items-container'>
            <h2>{props.producto}</h2>
            <p>{props.precio}</p>
        </div>
    )
}

export default ItemListContainer;