import React, {Component} from 'react';

import axios from 'axios'

class ZipCodeLoad extends Component {

    state = {
        currentZipCode:''
}

    render () {
        if (this.props.zipCode.length === 5 && this.state.currentZipCode !== this.props.zipCode) {
            axios.get(`https://cors.io/?https://trenntstadt-berlin.de/api-abfuhr.php?plz=${this.props.zipCode}&step=1`)
                .then(response => {
                    this.props.callback(response.data.d.results);
                    this.setState({currentZipCode:this.props.zipCode});
                });
        }

        return (<div/>);

    }

}

export default ZipCodeLoad;