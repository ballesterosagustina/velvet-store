import React from "react";
import './App.css';
import logo from './velvet-nav.png';

// Components:
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import Producto from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App () {
  let stock = 15;

  function Agregar (counter) {
    counter > stock
    ? alert('No tenemos stock suficiente')
    : alert('Añadido al carrito');
  }

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar/> 
        </header>
        <Producto/>
        <ItemCount stock={stock} initial={0} onAdd={Agregar} />
        <ItemDetailContainer id={1}/>
      </div>
    )
  }


export default App;
