import React, {useEffect, useState} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {ListaProductos} from '../../data/productos';
import { useParams } from 'react-router-dom';

function ItemDetailContainer () {

    const [datosDelItem, setDatosDelItem] = useState({});
    const {detailId} = useParams ()

    useEffect (() => {
        const p = new Promise ((resolve, error) => {
            setTimeout(() => {
                resolve(ListaProductos.find(e=>e.id === parseInt(detailId)))
            },)
        })

        p.then((ListaProductos) => {
            setDatosDelItem (ListaProductos)
        })
    }, [detailId])

    return(
            <div>
                <ItemDetail item={datosDelItem}/>
            </div>
    )
}

export default ItemDetailContainer;