import moment from "moment";

interface Pickup {
  adrKey: number;
  street: string;
  pickup: moment.Moment;
}

interface Filter {
  street: string;
}

export { Pickup, Filter };
