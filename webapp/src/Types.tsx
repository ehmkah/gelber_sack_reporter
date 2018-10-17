import moment from "moment";

interface Pickup {
  adrKey: number;
  street: string;
  pickup: moment.Moment;
}

export { Pickup };
