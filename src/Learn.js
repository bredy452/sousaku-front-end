import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import getCharacters from "./getCharacters";

export default class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Characters
      characters: getCharacters(),
      currentCharacter: {},
      // Canvas
      brushRadius: 2,
      canvasWidth: 400,
      canvasHeight: 320,
      lazyRadius: 0,
      hideGridX: true,
      hideGridY: true,
    };
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.toggleLearning}>Back To Home</button>
        <CanvasDraw
          className="canvas"
          brushRadius={this.state.brushRadius}
          canvasWidth={this.state.canvasWidth}
          canvasHeight={this.state.canvasHeight}
          lazyRadius={this.state.lazyRadius}
          hideGridX={this.state.hideGridX}
          hideGridY={this.state.hideGridY}
        />
      </div>
    );
  }
}
