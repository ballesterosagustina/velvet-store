import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import Categories from '../Categories/Categories';
import './ItemListContainer.css';

//Firebase
import {db} from './../../firebase';
import { collection, query, getDocs } from "firebase/firestore";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();

    const getProducts = async() => {
        const docs = [];
        const q = query(collection(db, 'products'));
        
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
        })
    categoryId
    ? setProductos(docs.filter((e) => e.category === categoryId))
    : setProductos(docs);
    }

    useEffect(() => {
        getProducts();
    })

    return(
        <div className='items-container'>
            <div className='categories'>
               <Categories /> 
            </div>
            <div className='products'>
                {
                productos 
                ? <ItemList productos={productos} />
                : null
                }
            </div>
        </div>
    )
}

export default ItemListContainer;