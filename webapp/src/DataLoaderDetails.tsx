import React, { Component } from "react";

import axios from "axios";

interface Props {
  adrKey: string;
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
        console.log(response);
      });
  }

  public render() {
    return <div />;
  }
}

export default DataLoaderDetails;
