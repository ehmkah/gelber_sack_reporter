import React, {Component} from 'react';

import axios from 'axios'

class ZipCodeLoad extends Component {

    state = {
        countedRecords : 0
    }

    render () {
        if (this.props.zipCode.length === 5) {
            axios.get(`https://cors.io/?https://trenntstadt-berlin.de/api-abfuhr.php?plz=${this.props.zipCode}&step=1`)
                .then(response => {
                    console.log(response.data.d.results.length)
                    this.setState({countedRecords: response.data.d.results.length});
                });

            return (<h2>HURRA gefundene Eintraege {this.state.countedRecords}</h2>)
        }

        return (<h2>{this.props.zipCode}</h2>);

    }

}

export default ZipCodeLoad;