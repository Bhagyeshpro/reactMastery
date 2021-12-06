import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // };

  // Async the state using previousState so when we call our state at different time in our code it will work fine
  increment = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Mastery/ useState</h1>
        <h2>Counter</h2>
        <p>The count is {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
