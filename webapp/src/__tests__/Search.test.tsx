import React from "react";
import { create } from "react-test-renderer";
import Search from "../Search";

test("snapshot", () => {
  const c = create(<Search />);
  expect(c.toJSON()).toMatchSnapshot();
});
