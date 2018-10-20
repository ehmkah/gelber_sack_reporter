import React, { Component } from "react";
import { Filter, Pickup } from "./Types";

interface Props {
  pickups: Pickup[];
  callback: (filter: Filter) => void;
}

interface State {
  checked: string[];
  possibleDates: string[];
}

class DateFilter extends Component<Props, State> {
  public state = {
    checked: [],
    possibleDates: []
  };

  public constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
  }

  public static filter(pickup: Pickup, filter: Filter) {
    if (
      typeof filter.activeDates === "undefined" ||
      filter.activeDates.length === 0
    ) {
      return true;
    }

    const matched = filter.activeDates.filter(value => {
      return pickup.pickup.isSame(value);
    });

    if (matched.length > 0) {
      return true;
    }

    return false;
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
            <div key={value}>
              <input
                type="checkbox"
                onChange={this.handleChange}
                value={value}
                checked={true}
              />
              {value}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DateFilter;
