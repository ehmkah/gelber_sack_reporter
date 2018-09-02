import React, { Component } from 'react';

import AbholungDetail from './AbholungDetail';
import ZipCodeLoader from './ZipCodeLoad';

class Search extends Component {
  state = {
    streetName: '',
      zipCode: '',
      abholung:[],
      disabled:true
  };

  constructor(props) {
      super(props);
      this.handleNewStreets = this.handleNewStreets.bind(this);

  }

  handleNewStreets(data) {
     this.setState({abholung:data});
     this.setState({disabled:false});
  }

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
              placeholder="Postleitzahl"
          />
        <input
          onChange={this.handleStreetnameChange}
          value={this.state.streetName}
          type="text"
          placeholder="Strasse"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
        <div>
           < ZipCodeLoader zipCode={this.state.zipCode} callback={this.handleNewStreets}/>
          {this.state.abholung
            .filter(
              abholung =>
                abholung.Street.toUpperCase().indexOf(
                  this.state.streetName.toUpperCase()
                ) >= 0 && abholung.Houseno === ''
            )
              .sort((abholung1, abholung2) => {return abholung1.Street > abholung2.Street} )
            .map(abholung => <AbholungDetail street={abholung.Street} adrKey={abholung.Adrkey} />)}
        </div>
      </div>
    );
  }
}

export default Search;
