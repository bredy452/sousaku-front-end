import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home";
import Learn from "./Components/Learn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLearning: false,
      newBrushRadius: undefined,
      changeBrush: false,
    };
  }

  toggleIsLearning = () => {
    this.setState({
      isLearning: !this.state.isLearning,
    });
  };

  changeBrushSize = () => {
    this.setState({
      changeBrush: true,
      newBrushRadius: 6,
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
