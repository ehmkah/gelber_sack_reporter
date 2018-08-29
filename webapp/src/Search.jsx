import React, { Component } from 'react';
import preload from './data.json';

import AbholungDetail from './AbholungDetail';
import ZipCodeLoader from './ZipCodeLoad';

class Search extends Component {
  state = {
    streetName: 'laue',
      zipCode: ''

  };

  handleStreetnameChange = event => {
    this.setState({ streetName: event.target.value });
  };

  handleZipCodeChange = event => {
      this.setState({zipCode: event.target.value});
  }

  render() {
    return (
      <div>
          <input
              onChange={this.handleZipCodeChange}
              value={this.state.zipCode}
              type="text"
          />
        <input
          onChange={this.handleStreetnameChange}
          value={this.state.streetName}
          type="text"
        />
        <div>
           < ZipCodeLoader zipCode={this.state.zipCode}/>



          {preload.d.results
            .filter(
              abholung =>
                abholung.Street.toUpperCase().indexOf(
                  this.state.streetName.toUpperCase()
                ) >= 0 && abholung.Houseno === ''
            )
            .map(abholung => <AbholungDetail street={abholung.Street} adrKey={abholung.Adrkey} />)}
        </div>
      </div>
    );
  }
}

export default Search;
