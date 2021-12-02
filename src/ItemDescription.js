import React, { Component } from "react";

export default class ItemDescription extends Component {
  render() {
    const { title, discription } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>
          <i>{discription}</i>
        </h2>
      </div>
    );
  }
}
