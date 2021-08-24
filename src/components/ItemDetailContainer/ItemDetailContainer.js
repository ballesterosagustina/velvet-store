import React, {useEffect, useState} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {ListaProductos} from '../../data/productos';

function getItemByID (idProduct) {
    const p = new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (ListaProductos)
        }, 2000)
    });

    return p
        .then((res) => {
            return res.find (element => element.id === idProduct)
        }, error => {
            console.log (error)
        });
}

function ItemDetailContainer ({id}) {
    const [itemDetail, setItemDetail] = useState({})

    useEffect (() => {
        getItemByID(id).then(itemDetail => {
            setItemDetail (itemDetail)
        })
    }, [id])

    return(
        <div>
            <ItemDetail item={itemDetail} />
        </div>
    )
}

export default ItemDetailContainer;