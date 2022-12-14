import React, { Component } from "react";

export default class EventDemo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sanjay",
    };
    this.f2 = this.f2.bind(this);
  }
  f1() {
    console.log(this);
    console.log(this.state.name);
  }
  f2() {
    console.log(this);
    console.log(this.state.name);
  }
  f3 = () => {
    console.log(this);
    console.log(this.state.name);
  };
  render() {
    return (
      <>
        <div>EventDemo2</div>
        <button onClick={this.f1}>btn-1</button>
        <button onClick={this.f2}>btn-2</button>
        <button onClick={this.f3}>btn-3</button>
      </>
    );
  }
}
