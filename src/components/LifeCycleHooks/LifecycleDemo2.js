import React, { Component } from "react";

export default class LifecycleDemo2 extends Component {
  render() {
    return <div>LifecycleDemo2</div>;
  }
  componentWillUnmount() {
    console.log(
      "component LifecycleDemo2 is about to be removed, please do the clean up"
    );
  }
}
