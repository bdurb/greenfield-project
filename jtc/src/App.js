import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Conclusion from './conclusions';
import brain from './img/brain.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Don't know what to do?</h1>
          <img className="App-logo" src ={brain}/>
          <h2 className="catch">Don't Bother that Pesky Brain!</h2>
        </div>
        <Conclusion />
      </div>
    );
  }
}

export default App;
