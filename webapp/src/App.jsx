import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        {' '}
        <header className="App-header">
          {' '}
          <img src={logo} className="App-logo" alt="logo" />{' '}
          <h1 className="App-title">Der Gelbe Sack Reporter</h1>{' '}
        </header>{' '}
        <Search />{' '}
      </div>
    );
  }
}

export default App;
