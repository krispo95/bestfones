import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-menu">
            <ul>
              <li className="App-header-btn App-header-btn-left"><a href="#">Каталог</a></li>
              <li  className="App-header-btn App-header-btn-right"><a href="#">Личный кабинет</a></li>
            </ul>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-promo">
        </div>
      </div>
    );
  }
}

export default App;
