import React, { Component } from "react";

import { Filter, Pickup } from "./Types";

import StreetFilter from "./StreetFilter";
import DateFilter from "./DateFilter";

interface Props {
  pickUps: Pickup[];
}

interface State {
  filter: Filter;
}

class PickUpRenderer extends Component<Props, State> {
  public state = {
    filter: { street: "", activeDates: undefined }
  };

  public constructor(props: Props) {
    super(props);
    this.changeStreet = this.changeStreet.bind(this);
  }

  public changeStreet(filter: Filter) {
    this.setState({ filter });
  }

  public render() {
    if (this.props.pickUps.length > 0) {
      return (
        <div>
          <div>
            <StreetFilter
              filter={this.state.filter}
              callback={this.changeStreet}
            />
            <DateFilter pickups={this.props.pickUps} />
          </div>
          <table>
            <tr>
              <th>Strasse</th>
              <th>Abholdatum</th>
            </tr>
            {this.props.pickUps
              .filter(value => {
                return this.filter(value);
              })
              .sort((pickup1: Pickup, pickup2: Pickup) => {
                return pickup1.street.localeCompare(pickup2.street);
              })
              .map(value => {
                return (
                  <tr>
                    <td>{value.street}</td>
                    <td>{value.pickup.format("DD.MM.YYYY")}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      );
    } else {
      return <div>enthält die Liste der Pickups</div>;
    }
  }

  private filter(value: Pickup) {
    return (
      StreetFilter.filter(value, this.state.filter) &&
      DateFilter.filter(value, this.state.filter)
    );
  }
}

export default PickUpRenderer;
