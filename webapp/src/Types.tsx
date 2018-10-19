import moment from "moment";

interface Pickup {
  adrKey: number;
  street: string;
  pickup: moment.Moment;
}

interface Filter {
  street: string;
  activeDates?: string[];
}

export { Pickup, Filter };
