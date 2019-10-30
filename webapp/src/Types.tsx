import moment from "moment";

interface Pickup {
  adrKey: number;
  street: string;
  houseNo: string;
  pickup: moment.Moment;
}

interface Filter {
  street: string;
  activeDates: moment.Moment[];
}

export { Pickup, Filter };
