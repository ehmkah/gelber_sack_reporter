import React, { Component } from "react";

interface State {
  zipCode: string;
}

class Search extends Component<object, State> {
  public state = {
    zipCode: "1234"
  };

  public foo() {
    const newVal: State = { zipCode: "4561" };
    this.setState(newVal);
  }

  public render() {
    return <div>hallo</div>;
  }
}

export default Search;
export { State };
