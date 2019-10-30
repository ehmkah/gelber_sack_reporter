import React, { Component } from "react";
import moment from "moment";

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
    filter: { street: "", activeDates: [] }
  };

  public constructor(props: Props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
  }

  public updateFilter(filter: Filter) {
    this.setState({ filter });
  }

  public render() {
    if (this.props.pickUps.length > 0) {
      return (
        <div>
          <div>
            <StreetFilter
              filter={this.state.filter}
              callback={this.updateFilter}
            />
            <DateFilter
              key="1"
              filter={this.state.filter}
              pickups={this.props.pickUps}
              callback={this.updateFilter}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>Strasse</th>
                <th>Abholdatum</th>
              </tr>
            </thead>
            <tbody>
              {this.props.pickUps
                .filter(value => {
                  return this.filter(value);
                })
                .sort((pickup1: Pickup, pickup2: Pickup) => {
                  return pickup1.street.localeCompare(pickup2.street);
                })
                .map(value => {
                  return (
                    <tr key={value.adrKey}>
                      <td>{value.street} {value.houseNo}</td>
                      <td>{value.pickup.format("DD.MM.YYYY")}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div />;
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
