import React, { Component } from "react";
import moment from "moment";

import { Filter, Pickup } from "./Types";

interface Props {
  pickups: Pickup[];
  filter: Filter;
  callback: (filter: Filter) => void;
}

interface State {
  checked: string[];
  possibleDates: string[];
}

class DateFilter extends Component<Props, State> {
  public state: State = {
    checked: [],
    possibleDates: []
  };

  public constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedDate: string = event.target.value;
    if (this.state.checked.indexOf(selectedDate) >= 0) {
      this.setState(oldState => {
        const checked = oldState.checked.filter(value => {
          return value !== selectedDate;
        });
        const newState: State = {
          checked,
          possibleDates: oldState.possibleDates
        };
        return newState;
      });
      const activeDates = this.props.filter.activeDates.filter(value => {
        return !value.isSame(moment(selectedDate, "DD.MM.YYYY"));
      });
      const filter: Filter = {
        street: this.props.filter.street,
        activeDates
      };

      this.props.callback(filter);
    } else {
      this.setState(oldState => {
        const checked = oldState.checked.concat(selectedDate);
        const newState: State = {
          checked,
          possibleDates: oldState.possibleDates
        };
        return newState;
      });
      const activeDates = this.props.filter.activeDates.concat(
        moment(selectedDate, "DD.MM.YYYY")
      );
      const filter: Filter = {
        street: this.props.filter.street,
        activeDates
      };
      this.props.callback(filter);
    }
  }

  public static getDerivedStateFromProps(props: Props, state: State) {
    const possibleDates = DateFilter.extractDates(props.pickups);

    return { possibleDates };
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

  private static extractDates(pickups: Pickup[]) {
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
    return (
      <div>
        <div>
          Heute haben wir den {moment().format("DD.MM.YYYY")}
          ;-)
        </div>

        {this.state.possibleDates.map(value => {
          const checked =
            this.state.checked.indexOf(value) >= 0 ||
            this.props.filter.activeDates.length === 0;
          console.log(this.state.checked);
          return (
            <div key={value}>
              <input
                type="checkbox"
                onChange={this.handleChange}
                value={value}
                checked={checked}
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
