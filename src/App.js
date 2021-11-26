import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home";
import Learn from "./Components/Learn";
import Logo from "./Components/Logo";
import JapanesePicture from "./Components/Picture";
import Akasata from "./Components/Akasata";
import Phone from "./Components/Phone";
import SignInSignUp from "./Components/SignInSignUp";
import Bios from "./Components/Bios";
import Navigation from "./Components/Nav";
import GlassPalette from "./Components/GlassPalette"
import MainPhone from "./Components/MainPhone"
import Sketch from "./Components/Sketch"
import HandFan from "./Components/HandFan"
import MeetSkilCraft from "./Components/MeetSkilCraft";

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
    console.log(document.querySelector(".app"));
  };

  render() {
    return (
      <div className="App2">
        {this.state.isLearning ? (
          <Learn toggleIsLearning={this.toggleIsLearning} />
        ) : (
          <div>
            <Navigation />
            <Logo />
            <JapanesePicture />

            <Home
              toggleIsLearning={this.toggleIsLearning}
              className="homeButton"
            />
            <Akasata />
            <Phone />
            <SignInSignUp />
            <GlassPalette />
            <MainPhone />
            <Sketch />
            <HandFan />
            <MeetSkilCraft />
            <Bios />
          </div>
        )}
      </div>
    );
  }
}
