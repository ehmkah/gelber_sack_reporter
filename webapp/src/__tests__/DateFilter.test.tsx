import React from "react";
import { create } from "react-test-renderer";
import moment from "moment";

import DateFilter from "../DateFilter";
import { Filter } from "../Types";

test("testFilter", () => {
  // given
  const pickup = {
    adrKey: 123,
    street: "VON STR",
    pickup: moment("20181019", "YYYYMMDD")
  };
  const filter: Filter = { street: "VON STR", activeDates: undefined };

  // then
  expect(DateFilter.filter(pickup, filter)).toBe(true);
});

test("testFilter2", () => {
  // given
  const pickup = {
    adrKey: 123,
    street: "VON STR",
    pickup: moment("20181019", "YYYYMMDD")
  };
  const filter: Filter = { street: "VON STR", activeDates: [] };

  // then
  expect(DateFilter.filter(pickup, filter)).toBe(false);
});
