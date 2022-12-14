import React, { PureComponent } from "react";

export default class CounterDemo1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("callback ", this.state.count);
    }); // asynchronous
    console.log(this.state.count);

    setInterval(() => {
      this.setState({ count: 0 });
    }, 2000);
  };

  render() {
    console.log('render called...')
    return (
      <>
        <p>Count is: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
