import React, {useEffect, useState} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

// Firebase
import { db } from '../../firebase';
import {doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [datosDelItem, setDatosDelItem] = useState({});
    const [isVisible, setIsVisible] = useState(false)
    const {detailId} = useParams ()

    const getProduct = async (id) => {
        const docRef = doc(db, 'products', detailId);
        const docSnap = await getDoc(docRef)
        let prdId = {}

        if(docSnap.exists()) { 
            setIsVisible(true)
            prdId = docSnap.id;
            setDatosDelItem({...docSnap.data(), id:prdId})
        } else {
            alert('ocurrió un error');
        }
    }

    useEffect(() => {
        getProduct(detailId)
    }, [detailId])

    return(
            <div>
                <ItemDetail item={datosDelItem}/>
            </div>
    )
}

export default ItemDetailContainer;