import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { ListaProductos } from '../../data/productos';
import Categories from '../Categories/Categories';

const ItemListContainer = () => {
    const [resultadoDeItems, setResultadoDeItems] = useState(null)
    const {categoryId} = useParams()

    useEffect (() => {
        const llamadaAlServidor = new Promise ((resolve, reject) => {
            setTimeout(() => {
                categoryId ?
                resolve(ListaProductos.filter(e=>e.category === categoryId))
                :
                resolve(ListaProductos)
            }, 2000)
        })

        llamadaAlServidor.then((ListaProductos) => {
            setResultadoDeItems (ListaProductos)
        })
    }, [categoryId])

    return (
        <div className='items-container'>
            <div>
                <Categories />
            </div>
            <div>
            { resultadoDeItems
            ? <ItemList items={resultadoDeItems}/>
            : null}
            </div>
        </div>
    )
}

export default ItemListContainer;