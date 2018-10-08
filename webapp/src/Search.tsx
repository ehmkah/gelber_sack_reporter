import React, { Component } from "react";

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
    pickups: [{ street: "Von-Laue-Str. 12", pickup: new Date() }]
  };

  public constructor(props: object) {
    super(props);
    this.changeZipCode = this.changeZipCode.bind(this);
  }

  public changeZipCode(event: React.ChangeEvent<HTMLInputElement>) {
    const newVal: State = { zipCode: event.target.value, pickups: [] };
    this.setState(newVal);
  }

  public handleDataLoaded(data: Pickup[]) {
    this.setState({ pickups: data });
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

        <DataLoader />
      </div>
    );
  }
}

export default Search;
export { State };
