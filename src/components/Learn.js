import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import getCharacters from "../getCharacters";

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
      canvasWidth: 200,
      canvasHeight: 200,
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
        {console.log(this.props.changeBrush)}
        
        <div className="App">
          <div>
            <button onClick={this.props.toggleLearning}>Back To Home</button>
          </div>
          <div className="container">
            <div /*class="four columns"*/>
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
            <div className="animation">
              <img
                src={this.state.currentCharacter.animation}
                height="60"
                alt={this.state.currentCharacter.romaji}
              />
            </div>
          </div>
          <br></br>
          <div>
            <button onClick={(e) => this.changeCharacterBackwards(e)}>
              Previous
            </button>
            {/*<button>
              Tutorial
            </button>*/}
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
