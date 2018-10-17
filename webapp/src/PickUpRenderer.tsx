import React, { Component } from "react";

import { Filter, Pickup } from "./Types";

interface Props {
  pickUps: Pickup[];
}

interface State {
  filter: Filter;
}

class PickUpRenderer extends Component<Props, State> {
  public state = {
    filter: { street: "" }
  };

  public constructor(props: Props) {
    super(props);
    this.changeStreet = this.changeStreet.bind(this);
  }

  public changeStreet(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ filter: { street: event.target.value } });
  }

  public render() {
    if (this.props.pickUps.length > 0) {
      return (
        <table>
          <div>
            <input
              type="text"
              onChange={this.changeStreet}
              value={this.state.filter.street}
              placeholder="Strassenname"
            />
          </div>

          <tr>
            <th>Strasse</th>
            <th>Abholdatum</th>
          </tr>
          {this.props.pickUps
            .filter(value => {
              return (
                value.street
                  .toUpperCase()
                  .indexOf(this.state.filter.street.toUpperCase()) >= 0
              );
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
      );
    } else {
      return <div>enthält die Liste der Pickups</div>;
    }
  }
}

export default PickUpRenderer;
