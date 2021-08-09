import React from "react";
import './App.css';
import logo from './velvet-nav.png';

// Components:
import './components/NavBar';
import NavBar from './components/NavBar';

class App extends React.Component {
  render () {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar/> 
        </header>
      </div>
    )
  }
}

export default App;
