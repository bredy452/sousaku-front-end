import "./Learn.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CanvasDraw from "react-canvas-draw";
import getCharacters from "../getCharacters";
import Badge from "react-bootstrap/Badge";

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
    e.preventDefault();
    if (this.state.nextCharacter < 45) {
      this.setState({
        //Must remember to put an if statement to stop incrementation later
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
      });
    }
  };

  changeCharacterBackwards = (e) => {
    e.preventDefault();
    if (this.state.nextCharacter > 0) {
      this.setState({
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[this.state.nextCharacter - 1],
      });
    }
  };

  target = (e) => {
    console.log(e.clientX);
    if (
      e.clientX > 1300 &&
      e.clientX < 1319 &&
      e.clientY < 231 &&
      e.clientY > 132
    ) {
      this.setState({
        brushRadius: 6,
      });
      // console.log("yes6")
    } else if (
      e.clientX > 1340 &&
      e.clientX < 1355 &&
      e.clientY < 231 &&
      e.clientY > 132
    ) {
      this.setState({
        brushRadius: 4,
      });
    } else if (
      e.clientX > 1371 &&
      e.clientX < 1391 &&
      e.clientY < 231 &&
      e.clientY > 132
    ) {
      this.setState({
        brushRadius: 2,
      });
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="Learn">
            <div className="Floor">
              <div>
                <Badge as="button" pill bg="light" text="warning" onClick={""}>
                  Reset
                </Badge>
              </div>

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
                                            <div
                                              onClick={(e) => this.target(e)}
                                              className="Line1"
                                            >
                                              <div className="Line2">
                                                <div className="Line3">
                                                  <div className="Engraving">
                                                    {/*<div className="Papers">*/}
                                                    <Container>
                                                      <Row>
                                                        <Col
                                                          md={{
                                                            span: 2,
                                                            offset: 5,
                                                          }}
                                                        >
                                                          <div className="Canvas">
                                                            <CanvasDraw
                                                              brushRadius={
                                                                this.state
                                                                  .brushRadius
                                                              }
                                                              canvasWidth={
                                                                this.state
                                                                  .canvasWidth
                                                              }
                                                              canvasHeight={
                                                                this.state
                                                                  .canvasHeight
                                                              }
                                                              lazyRadius={
                                                                this.state
                                                                  .lazyRadius
                                                              }
                                                              hideGridX={
                                                                this.state
                                                                  .hideGridX
                                                              }
                                                              hideGridY={
                                                                this.state
                                                                  .hideGridY
                                                              }
                                                            />
                                                          </div>
                                                          <div>
                                                            <Badge
                                                              as="button"
                                                              pill
                                                              bg="light"
                                                              text="warning"
                                                              onClick={(e) =>
                                                                this.changeCharacterBackwards(
                                                                  e
                                                                )
                                                              }
                                                            >
                                                              Previous
                                                            </Badge>
                                                            <Badge
                                                              as="button"
                                                              pill
                                                              bg="light"
                                                              text="warning"
                                                              onClick={(e) =>
                                                                this.changeCharacterForward(
                                                                  e
                                                                )
                                                              }
                                                            >
                                                              Next
                                                            </Badge>
                                                          </div>
                                                        </Col>
                                                        <Col
                                                          md={{
                                                            span: 4,
                                                          }}
                                                        >
                                                          <div className="Character">
                                                            <img
                                                              src={
                                                                this.state
                                                                  .currentCharacter
                                                                  .animation
                                                              }
                                                              width={150}
                                                              alt={
                                                                this.state
                                                                  .currentCharacter
                                                                  .romaji
                                                              }
                                                            />
                                                            <figure>
                                                              <audio
                                                                controls
                                                                src={
                                                                  this.state
                                                                    .currentCharacter
                                                                    .pronunciation
                                                                }
                                                              >
                                                                Your browser
                                                                does not support
                                                                the{" "}
                                                                <code>
                                                                  audio
                                                                </code>{" "}
                                                                element.
                                                              </audio>
                                                            </figure>
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
      </>
    );
  }
}
