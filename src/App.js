import React from "react";
import './App.css';
import logo from './velvet-nav.png';

// Components:
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// React-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Views:
import Home from './views/Home';
import Productos from './views/Productos';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App () {

    return(
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar/> 
          </header>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Productos" component={Productos}/>
            <Route path="/Nosotros" component={Nosotros}/>
            <Route path="/Contacto" component={Contacto}/>
            <Route path="/Detail/:detailId" component={ItemDetailContainer}/>
            <Route path="/Category/:categoryId" component={ItemListContainer}/>
          </Switch>
        </div>
      </BrowserRouter>
      // <div className="App">
      //   <Producto/>
      //   <ItemCount stock={stock} initial={0} onAdd={Agregar} />
      //   <ItemDetailContainer id={1}/>
      // </div>
    )
  }


export default App;
