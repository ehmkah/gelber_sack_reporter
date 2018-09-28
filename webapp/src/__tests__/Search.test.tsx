import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import Search, { State } from "../Search";

test("snapshot", () => {
  const c = create(<Search />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("example unit test", () => {
  const wrapper = shallow(<Search />);
  const state = wrapper.state() as State;
  expect(state.zipCode).toBe("1234");
  const seacrh = wrapper.instance() as Search;
  seacrh.foo();
  const state2 = wrapper.state() as State;
  expect(state2.zipCode).toBe("4561");
});
