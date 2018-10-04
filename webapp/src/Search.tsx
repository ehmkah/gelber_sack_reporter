import React, { Component } from "react";

interface State {
  zipCode: string;
}

class Search extends Component<object, State> {
  public state = {
    zipCode: ""
  };

  public constructor(props: object) {
    super(props);
    this.changeZipCode = this.changeZipCode.bind(this);
  }

  public changeZipCode(event: React.ChangeEvent<HTMLInputElement>) {
    const newVal: State = { zipCode: event.target.value };
    this.setState(newVal);
  }

  public render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.changeZipCode}
          value={this.state.zipCode}
          placeholder="Postleitzahl"
        />
      </div>
    );
  }
}

export default Search;
export { State };
