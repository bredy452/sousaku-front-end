import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home";
import Learn from "./Components/Learn";
import Logo from "./Components/Logo";
import JapanesePicture from "./Components/Picture";
import Akasata from "./Components/Akasata";
import Phone from "./Components/Phone";

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
          <div>
            <Logo />
            <JapanesePicture />

            <Home
              toggleIsLearning={this.toggleIsLearning}
              className="homeButton"
            />
            <Akasata />
            <Phone />
          </div>
        )}
      </div>
    );
  }
}
