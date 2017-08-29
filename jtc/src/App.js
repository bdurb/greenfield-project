import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Conclusion from './conclusions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Struggling With a New Idea?</h1>
          <h3>Don't Bother that Pesky Brain</h3>
        </div>
        <Conclusion />
      </div>
    );
  }
}

export default App;
