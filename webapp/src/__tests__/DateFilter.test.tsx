import React from "react";
import { create } from "react-test-renderer";
import moment from "moment";

import DateFilter from "../DateFilter";
import { Filter } from "../Types";

const date20181019 = moment("20181019", "YYYYMMDD");
const date20181019a = moment("20181019", "YYYYMMDD");
const date20181020 = moment("20181020", "YYYYMMDD");
const date20181021 = moment("20181021", "YYYYMMDD");

test("pickup should NOT be filtered if filter is empty array", () => {
  // given
  const pickup = {
    adrKey: 123,
    street: "VON STR",
    pickup: date20181019
  };
  const filter: Filter = { street: "VON STR", activeDates: [] };

  // then
  expect(DateFilter.filter(pickup, filter)).toBe(true);
});

test("pickup should NOT be filtered out (dates match)", () => {
  // given

  const pickup = {
    adrKey: 123,
    street: "VON STR",
    pickup: date20181019a
  };
  const filter: Filter = { street: "VON STR", activeDates: [date20181019] };

  // then
  expect(DateFilter.filter(pickup, filter)).toBe(true);
});

test("pickup should be filtered out (dates NOT match)", () => {
  // given

  const pickup = {
    adrKey: 123,
    street: "VON STR",
    pickup: date20181019
  };
  const filter: Filter = { street: "VON STR", activeDates: [date20181020] };

  // then
  expect(DateFilter.filter(pickup, filter)).toBe(false);
});

test("pickup should be filtered out (NO dates match)", () => {
  // given

  const pickup = {
    adrKey: 123,
    street: "VON STR",
    pickup: date20181019
  };
  const filter: Filter = {
    street: "VON STR",
    activeDates: [date20181020, date20181021]
  };

  // then
  expect(DateFilter.filter(pickup, filter)).toBe(false);
});

test("pickup should NOT be filtered out (one dates match)", () => {
  // given

  const pickup = {
    adrKey: 123,
    street: "VON STR",
    pickup: date20181020
  };
  const filter: Filter = {
    street: "VON STR",
    activeDates: [date20181020, date20181021]
  };

  // then
  expect(DateFilter.filter(pickup, filter)).toBe(true);
});
