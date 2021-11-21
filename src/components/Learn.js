import "./Learn.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        animation: "https://yosida.com/images/kana/a.gif"
      },
      nextCharacter: 1,
      // Canvas
      brushRadius: 2,
      canvasWidth: 200,
      canvasHeight: 200,
      lazyRadius: 0,
      hideGridX: true,
      hideGridY: true,
    };
  }

  componentDidMount() {
    this.setState({
      currentCharacter: this.state.characters[0],
    });
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

  // changeCharacter = (e) => {
  //   console.log(e.target.closest("button").id)
  //   let firstIdx = 0;
  //   let lastIdx = this.state.characters.length - 1;
  //   let currentIdx = this.state.currentCharacter.id - 1;
  //   if (e.target.closest("button").id === "Previous") {
  //     if (currentIdx === firstIdx) {
  //       this.setState({
  //         currentCharacter: this.state.characters[lastIdx],
  //       });
  //     } else {
  //       this.setState({
  //         currentCharacter: this.state.characters[currentIdx - 1],
  //       });
  //     }
  //   } else {
  //     if (currentIdx === lastIdx) {
  //       this.setState({
  //         currentCharacter: this.state.characters[firstIdx],
  //       });
  //     } else {
  //       this.setState({
  //         currentCharacter: this.state.characters[currentIdx + 1],
  //       });
  //     }
  //   }
  // }

  render() {
    return (
      <>
        {console.log(this.props.changeBrush)}
        
        <div className="App">
          <div>
            <button onClick={this.props.toggleLearning}>Back To Home</button>
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
      <div className="Learn">
        <div className="Floor">
          <div className="Fan">
          <div className="Leaves">
            <div className="Table">
              <div className="TableSide">
                <div className="Splat">
                  <div className="Brush">
                    <div className="PaintBlack">
                      <div className="PaintRed">
                      <div className="Sousaku">
                      <div className="Palette">
                      <div className="PaletteRed">
                      <div className="PaletteBlack">
                      <div className="Circle1">
                      <div className="Circle2">
                      <div className="Circle3">
                      <div className="Line1">
                      <div className="Line2">
                      <div className="Line3">
                  <div className="Engraving">
                    <div className="Papers">
                                    
                                          
                                            
                <Container>
                  <Row>
                    <Col md={{ span: 3, offset: 5 }}>
                      <div className="Canvas">
                        <CanvasDraw
                          brushRadius={this.state.brushRadius}
                          canvasWidth={this.state.canvasWidth}
                          canvasHeight={this.state.canvasHeight}
                          lazyRadius={this.state.lazyRadius}
                          hideGridX={this.state.hideGridX}
                          hideGridY={this.state.hideGridY}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="Character">
                        <img
                          src={this.state.currentCharacter.animation}
                          width={this.state.canvasWidth}
                          alt={this.state.currentCharacter.romaji}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}
