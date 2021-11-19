import "./App.css";
import React, { Component } from "react";
import Home from "./Home";
import Learn from "./Learn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLearning: false,
    };
  }

  isMobileOrNot = () => {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      /* your code here */
    }
  };

  toggleLearning = () => {
    this.setState({
      isLearning: !this.state.isLearning,
    });
  };

  render() {
    return (
      <>
        {this.state.isLearning ? (
          <Learn toggleLearning={this.toggleLearning} />
        ) : (
          <Home toggleLearning={this.toggleLearning} />
        )}
      </>
    );
  }
}
