import React, { Component } from "react";
import { Filter, Pickup } from "./Types";

interface Props {
  filter: Filter;
  callback: (filter: Filter) => void;
}

class StreetFilter extends Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.changeStreet = this.changeStreet.bind(this);
  }

  public static filter(pickup: Pickup, filter: Filter): boolean {
    return (
      pickup.street.toUpperCase().indexOf(filter.street.toUpperCase()) >= 0
    );
  }

  public changeStreet(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.callback({ street: event.target.value });
  }

  public render() {
    return (
      <input
        type="text"
        onChange={this.changeStreet}
        value={this.props.filter.street}
        placeholder="Strassenname"
      />
    );
  }
}

export default StreetFilter;
