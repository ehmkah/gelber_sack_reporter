import React, { Component } from "react";

import axios, { AxiosResponse } from "axios";

import DataLoaderDetails from "./DataLoaderDetails";
import { Pickup } from "./Types";

interface Props {
  zipCode: string;
  callBack: (pickUp: Pickup) => void;
}

interface State {
  status: InterState;
  data: ApiData[];
}

interface ApiData {
  Houseno: string;
  Adrkey: number;
}

enum InterState {
  Empty,
  Loading,
  Loaded
}

class DataLoader extends Component<Props, State> {
  public state: State = {
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
          this.setState({ data: response.data.d.results });
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
                return (
                  <DataLoaderDetails
                    key={entry.Adrkey}
                    adrKey={entry.Adrkey}
                    callBack={this.props.callBack}
                  />
                );
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
