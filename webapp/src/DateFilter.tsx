import React, { Component } from "react";
import { Filter, Pickup } from "./Types";

interface Props {
  pickups: Pickup[];
}

class DateFilter extends Component<Props, object> {
  public static filter(pickup: Pickup, filter: Filter) {
    return typeof filter.activeDates === "undefined";
  }

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
      })
      .sort((a: string, b: string) => {
        return a.localeCompare(b);
      });

    return result;
  }

  public render() {
    const dates = this.extractDates(this.props.pickups);

    return (
      <div>
        {dates.map(value => {
          return (
            <div>
              <input type="checkbox" value={value} checked={true} />
              {value}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DateFilter;
