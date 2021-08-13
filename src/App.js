import React from "react";
import './App.css';
import logo from './velvet-nav.png';

// Components:
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import Greeting from './components/ItemListContainer/ItemListContainer'

class App extends React.Component {
  render () {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar/> 
        </header>
        <Greeting title='Bienvenidos' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
' />
      </div>
    )
  }
}

export default App;
