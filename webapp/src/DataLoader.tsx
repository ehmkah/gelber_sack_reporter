import React, { Component } from "react";

import axios, { AxiosResponse } from "axios";

import DataLoaderDetails from "./DataLoaderDetails";

interface Props {
  zipCode: string;
}

interface State {
  status: InterState;
  data: any;
}

enum InterState {
  Empty,
  Loading,
  Loaded
}

class DataLoader extends Component<Props, State> {
  public state = {
    status: InterState.Empty,
    data: []
  };

  public render() {
    if (
      this.props.zipCode.length === 5 &&
      this.state.status !== InterState.Loading
    ) {
      this.setState({ status: InterState.Loading });
      axios
        .get(
          `https://cors.io/?https://trenntstadt-berlin.de/api-abfuhr.php?plz=${
            this.props.zipCode
          }&step=1`
        )
        .then(response => {
          return this.setState({ data: response.data.d.results });
        });
    }

    switch (this.state.status) {
      case InterState.Loading:
        return (
          <div>
            <div>lade daten für {this.props.zipCode}</div>
            {this.state.data
              .filter(abholung => abholung.Houseno === "")
              .map(entry => {
                return <DataLoaderDetails adrKey={entry.Adrkey} />;
              })}
          </div>
        );
      case InterState.Empty:
        return <div>noch nicht geladen</div>;
      default:
        return <div>Kacke, etwas stimmt nicht.</div>;
    }
  }
}

export default DataLoader;
