import React, { Component } from 'react';
import preload from './data.json';

class Search extends Component {
  state = {
    streetName: ''
  };

  handleSearchTermChange = event => {
    this.setState({ streetName: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleSearchTermChange}
          value={this.state.streetName}
          type="text"
        />
        <div>
          {preload.d.results
            .filter(
              abholung =>
                abholung.Street.toUpperCase().indexOf(
                  this.state.streetName.toUpperCase()
                ) >= 0 && abholung.Houseno === ''
            )
            .map(abholung => (
              <div>
                <div>{abholung.Street}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
