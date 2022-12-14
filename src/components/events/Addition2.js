import React, { Component } from "react";

export default class Addition2 extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0,
  };
  changeHandler = (event) => {
    const myKey = event.target.name; // num1/num2
    this.setState({ [myKey]: event.target.value });
  };
  //   changeHandler2 = (event) => {
  //     this.setState({ num2: event.target.value });
  //   };
  addition = () => {
    this.setState({ total: +this.state.num1 + +this.state.num2 });
  };
  render() {
    return (
      <>
        <div>Addition2</div>
        <input name="num1" onChange={this.changeHandler} />
        <input name="num2" onChange={this.changeHandler} />
        <button onClick={this.addition}>add</button>
        <p>Addition is: {this.state.total}</p>
      </>
    );
  }
}
