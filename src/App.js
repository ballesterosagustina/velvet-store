import React from "react";
import './App.css';
import logo from './velvet-nav.png';

// Components:
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import Producto from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';


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
        <Producto producto='Producto 1' precio='$100'/>
        <ItemCount stock={stock} initial={0} onAdd={Agregar} />
      </div>
    )
  }


export default App;
