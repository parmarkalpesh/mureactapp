import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementData() {
    if (this.state.counter >= 5) {
      this.setState({uniq:"true"})
    } else {
      this.setState({ counter: this.state.counter + 1, msg: "" });
    }
  }

  decrementData() {
    if (this.state.counter <= 0) {
        this.setState({dis:"true"})
      this.setState({ msg: "Sorry <0" });
    } else {
      this.setState({ counter: this.state.counter - 1, msg: "" });
    }
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        Value is {this.state.counter}
        <br />
        <input
          id="+"
          type="button"
          value="+"
          disabled = {this.state.uniq}
          onClick={this.incrementData.bind(this)}
        />
        <input
          type="button"
          value="X"
          onClick={() => this.setState({ counter: 0 })}
        />
        <input
          type="button"
          value="-"
          disabled = {this.state.dis}
          onClick={this.decrementData.bind(this)}
        />
        <p style={{ color: "red" }}>{this.state.msg}</p>
      </>
    );
  }
}

export default Counter;
