import React, { Component } from "react";
import LifecycleDemo2 from "./LifecycleDemo2";

export default class LifecycleDemo1 extends Component {
  constructor(props) {
    console.log("Contructor called");
    super(props);
    this.state = {
      color: "red",
      flag: true,
    };
  }
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps called");
  //     console.log(state, props);
  //     return { color: props.color };
  //   }
//   componentDidMount() {
//     console.log("componentDidMount called");
//     // document.getElementById("div1").innerText = "something else....";
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate called");
//     if (this.state.color === nextState.color) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate called");
//     console.log(document.getElementById("div1"));
//     // document.getElementById("div1").innerHTML =
//     //   "Before the update, the color was " + prevState.color;
//     return prevState;
//   }
//   componentDidUpdate() {
//     console.log(this.state.color);
//     console.log("componentDidUpdate called");
//   }
  render() {
    console.log("render called");
    return (
      <>
        <div style={{ color: this.state.color }}>
          LifecycleDemo1 - {this.state.color}
        </div>
        <div id="div1">hello</div>
        <div id="div2">hii</div>
        <button onClick={() => this.setState({ color: "red" })}>
          change color
        </button>
        ===============================================
        <button onClick={() => this.setState({ flag: !this.state.flag })}>
          change flag
        </button>
        {this.state.flag ? <LifecycleDemo2 /> : null}
      </>
    );
  }
}
