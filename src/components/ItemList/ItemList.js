import React, {useEffect, useState} from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { ListaProductos } from '../../data/productos';
import loading from '../loading.gif';

const ItemList = () =>{
    const [productos, setProductos] = useState([]);

    useEffect (() => {
        const prom = new Promise ((resolve) => {
            setTimeout(() =>{
                resolve(ListaProductos)
            }, 2000)
        })
        prom.then ((resultado) => {
            setProductos(resultado);
        })
    }, [])

    return (
        <div className='productos-container'>
            {productos.length===0 ? <img src={loading} alt='Cargando'/> : 
            productos.map((prod) => {
                return (
                    <Item producto={prod}/>
                )
            })}
        </div>
    )
}

export default ItemList;