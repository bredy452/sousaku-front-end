import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import Learn from "./components/Learn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLearning: false,
    };
  }

  toggleIsLearning = () => {
    this.setState({
      isLearning: !this.state.isLearning,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isLearning ? (
          <Learn toggleIsLearning={this.toggleIsLearning} />
        ) : (
          <Home toggleIsLearning={this.toggleIsLearning} />
        )}
      </div>
    );
  }
}
