import { Component } from "react";

class Counter extends Component {
  state={count:0}

  increment = () => {
    this.setState({count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>Assignment 01</h1>
        <div className="count">
          <h1>Counter: <span>{count}</span></h1>
          <div className="buttonc">
            <button className="b1" onClick={this.increment}>Increment Counter</button>
            <button className="b1" onClick={this.decrement}>Decrement Counter</button>
            <button className="b1" onClick={this.reset}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;
