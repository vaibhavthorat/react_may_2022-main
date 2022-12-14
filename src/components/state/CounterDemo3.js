import React, { Component } from "react";

export default class CounterDemo3 extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  incrementBy5 = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };
  incrementBy10 = () => {
    this.setState({ count: this.state.count + 10 });
  };
  render() {
    return (
      <>
        <p>Count is: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementBy5}>Increment-5</button>
        <button onClick={this.incrementBy10}>Increment-10</button>
      </>
    );
  }
}
