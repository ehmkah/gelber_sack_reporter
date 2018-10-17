import React, { Component } from "react";
import { Pickup } from "./Types";

interface Props {
  pickups: Pickup[];
}

class DateFilter extends Component<Props, object> {
  private extractDates(pickups: Pickup[]) {
    const result = pickups
      .map(value => {
        return value.pickup;
      })
      .map(value => {
        return value.format("DD.MM.YYYY");
      })
      .filter((theValue, theIndex, theArray) => {
        return theArray.indexOf(theValue) === theIndex;
      });

    return result;
  }

  public render() {
    const dates = this.extractDates(this.props.pickups);

    return (
      <div>
        <h1>
          datefilter
          {dates.map(value => {
            return <div>{value}</div>;
          })}
        </h1>
      </div>
    );
  }
}

export default DateFilter;
