import React, { Component } from "react";

export default class LocalVariableDemo2 extends Component {
  count = 0;
  increment = () => {
    this.count = this.count + 1;
    console.log(this.count);
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <p>Count is: {this.count}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
