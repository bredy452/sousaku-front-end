import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <h1>Sousaku</h1>
        <p>Learn kana one stroke at a time</p>
        <button onClick={this.props.toggleIsLearning}>Start Learning</button>
      </div>
    );
  }
}
