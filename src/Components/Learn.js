import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import getCharacters from "./GetCharacters";

export default class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Characters
      characters: getCharacters(),
      currentCharacter: {
        romaji: "a",
        id: 1,
        animation: "https://yosida.com/images/kana/a.gif",
      },
      // Canvas
      brushRadius: 2,
      canvasWidth: 400,
      canvasHeight: 320,
      lazyRadius: 0,
      hideGridX: true,
      hideGridY: true,
      nextCharacter: 1,
      // previousCharacter: 0
    };
  }

  changeCharacterForward = (e) => {
    this.setState({
      //Must remember to put an if statement to stop incrementation later
      nextCharacter: this.state.nextCharacter + 1,
      currentCharacter: this.state.characters[this.state.nextCharacter],
    });
  };

  changeCharacterBackwards = (e) => {
    if (this.state.nextCharacter > 0) {
      this.setState({
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[this.state.nextCharacter - 1],
      });
    }
  };

  render() {
    return (
      <>
        <div /*className="App"*/>
          <div class="homeButton">
            <button onClick={this.props.toggleLearning}>Back To Home</button>
          </div>
          <div class="row">
            <div class="four columns">Hello</div>

            <div class="four columns">
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
            <div class="four columns animation">
              <img src={this.state.currentCharacter.animation} height="60" />
            </div>
          </div>
          <br></br>
          <div class="previousNext">
            <button onClick={(e) => this.changeCharacterBackwards(e)}>
              Previous
            </button>
            <button onClick={(e) => this.changeCharacterForward(e)}>
              Next
            </button>
          </div>
          {console.log(this.state.currentCharacter, this.state.nextCharacter)}
        </div>
      </>
    );
  }
}
