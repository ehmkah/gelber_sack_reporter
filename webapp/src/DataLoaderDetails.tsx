import React, { Component } from "react";
import moment from "moment";

import axios from "axios";
import { Pickup } from "./Types";

interface Props {
  adrKey: number;
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
          pickup: moment(response.data.d.Service_date, "YYYYMMDD")
        };
        this.props.callBack(result);
      });
  }

  public render() {
    return <div />;
  }
}

export default DataLoaderDetails;
