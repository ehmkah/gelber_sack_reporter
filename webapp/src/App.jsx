import React, { Component } from 'react';
import { render } from 'react-dom';

import logo from './logo.svg';

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
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
