import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div className='items-container'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ItemListContainer;