import React, { Component } from "react";
import moment from "moment";

import DataLoader from "./DataLoader";
import PickUpRenderer from "./PickUpRenderer";
import { Pickup } from "./Types";

interface State {
  zipCode: string;
  pickups: Pickup[];
}

class Search extends Component<object, State> {
  public state = {
    zipCode: "",
    pickups: [{ adrKey: 123, street: "Von-Laue-Str. 12", pickup: moment() }]
  };

  public constructor(props: object) {
    super(props);
    this.changeZipCode = this.changeZipCode.bind(this);
    this.handleDataLoaded = this.handleDataLoaded.bind(this);
  }

  public changeZipCode(event: React.ChangeEvent<HTMLInputElement>) {
    const newVal: State = {
      zipCode: event.target.value,
      pickups: []
    };
    this.setState(newVal);
  }

  public handleDataLoaded(data: Pickup) {
    console.log("callback in the house");
    console.log(data);
    console.log(this.state.pickups);

    this.setState(state => {
      const updatedPickups = state.pickups.concat(data);
      return {
        zipCode: state.zipCode,
        pickups: updatedPickups
      };
    });
  }

  public render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.changeZipCode}
          value={this.state.zipCode}
          placeholder="Postleitzahl"
        />
        <PickUpRenderer pickUps={this.state.pickups} />
        <DataLoader
          zipCode={this.state.zipCode}
          callBack={this.handleDataLoaded}
        />
      </div>
    );
  }
}

export default Search;
export { State };
