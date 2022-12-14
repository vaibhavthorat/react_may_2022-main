import React, { Component } from "react";

class MemoDemo3 extends Component {
  render() {
    console.log("MemoDemo3 rendered...");
    return (
      <>
        <div>MemoDemo3</div>
        <div>counter is {this.props.counter}</div>
      </>
    );
  }
}
export default React.memo(MemoDemo3);
