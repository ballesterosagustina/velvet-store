import React from 'react';

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
        <div>
            <p>Stock disponible: {stock}</p>
            <button onClick={handleDecrement}> - </button>
            <p>{counter}</p>
            <button onClick={handleIncrement}> + </button>
            <button onClick={ () => onAdd(counter)}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;