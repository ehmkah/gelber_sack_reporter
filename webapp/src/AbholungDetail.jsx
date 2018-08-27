import React, { Component } from 'react';

import axios from 'axios';
import moment from 'moment'

class AbholungDetail extends Component {

  state = {
    abholTag:''
  }
    componentDidMount() {
axios.get(`https://cors.io/?https://trenntstadt-berlin.de/api-abfuhr.php?adrkey=${this.props.adrKey}&step=2`)
    .then(response => {
        const abholTag = moment(response.data.d.Service_date, 'YYYYMMDD').format('DD.MM.YYYY');
this.setState({abholTag: abholTag})});
    }

  render() {
    return (
      <div>
        <div>{this.props.street}</div>
          <div>{this.state.abholTag}</div>
      </div>
    );
  }
}

export default AbholungDetail;
