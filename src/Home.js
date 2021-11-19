import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sousaku</h1>
        <p>Learn kana one stroke at a time</p>
        <button onClick={this.props.toggleLearning}>Start Learning</button>
      </div>
    );
  }
}
