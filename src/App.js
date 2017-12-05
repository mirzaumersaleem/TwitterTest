import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TwitterApi from './Component/twitter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Twitter Test Mirza Umer</h1>
        </header>
         {/*calling custom Twitter Component */}
        <TwitterApi/>   
      
      </div>
    );
  }
}

export default App;
