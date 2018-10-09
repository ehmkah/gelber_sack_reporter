import React, { Component } from "react";

import axios from "axios";
import { Pickup } from "./Types";

interface Props {
  adrKey: string;
  callBack: (pickup: Pickup) => void;
}

class DataLoaderDetails extends Component<Props, object> {
  public componentDidMount() {
    axios
      .get(
        `https://cors.io/?https://trenntstadt-berlin.de/api-abfuhr.php?adrkey=${
          this.props.adrKey
        }&step=2`
      )
      .then(response => {
        const result: Pickup = {
          adrKey: this.props.adrKey,
          street: response.data.d.Street,
          pickup: new Date()
        };
        this.props.callBack(result);
      });
  }

  public render() {
    return <div />;
  }
}

export default DataLoaderDetails;
