import "./App.css";
import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brushRadius: 2,
      canvasWidth: 400,
      canvasHeight: 320,
      lazyRadius: 0,
      hideGridX: true,
      hideGridY: true,
    };
  }

  isMobileOrNot = () => {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      /* your code here */
    }
  };

  render() {
    return (
      <>
        <CanvasDraw
          className="canvas"
          brushRadius={this.state.brushRadius}
          canvasWidth={this.state.canvasWidth}
          canvasHeight={this.state.canvasHeight}
          lazyRadius={this.state.lazyRadius}
          hideGridX={this.state.hideGridX}
          hideGridY={this.state.hideGridY}
        />
      </>
    );
  }
}
