import React, { Component } from 'react';
import { render } from 'react-dom';

import Search from "./Search";

class App extends Component {
   public render() {
    return (
      <div className="App">
        {' '}
        <header className="App-header">
          {' '}
          <h1 className="App-title">Der Gelbe Sack Repsorter</h1>{' '}
        </header>{' '}
        <Search />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
