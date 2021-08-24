import React from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = React.useState(initial);

    const handleIncrement = () => {
        setCounter (counter + 1);
    }
    const handleDecrement = () => {
        if(counter > 0){
            setCounter (counter -1);
        } else {
            return false;
        }
    }

    return (
        <div className='item-count'>
            <p>Stock disponible: {stock}</p>
            <div className='item-count-botones'>
                <button onClick={handleDecrement} className='item-count-botones-componente'> - </button>
                <p className='item-count-botones-componente'> {counter} </p>
                <button onClick={handleIncrement} className='item-count-botones-componente'> + </button>
                <button onClick={ () => onAdd(counter)} className='item-count-botones-componente'>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;