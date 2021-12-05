import React, { Component } from "react";

export default class ClassApp extends Component {
  constructor(props) {
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    //When Component mounts/loads
    console.log("The app Component loaded");
  }

  componentDidUpdate(prevProps) {
    //when component props change
  }

  componentWillUnmount() {
    //when component unmounts/cleanup function
  }

  render() {
    return (
      <div className="App">
        <h1>React Mastery</h1>
        <h2>UseEffect</h2>
        <h3>Your Window Width is {windowWidth}</h3>
      </div>
    );
  }
}
