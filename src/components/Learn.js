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
      currentCharacter: {},
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

  changeCharacter = (e) => {
    let firstIdx = 0;
    let lastIdx = this.state.characters.length - 1;
    let currentIdx = this.state.currentCharacter.id - 1;
    if (e.target.value === "Previous") {
      if (currentIdx === firstIdx) {
        this.setState({
          currentCharacter: this.state.characters[lastIdx],
        });
      } else {
        this.setState({
          currentCharacter: this.state.characters[currentIdx - 1],
        });
      }
    } else {
      if (currentIdx === lastIdx) {
        this.setState({
          currentCharacter: this.state.characters[firstIdx],
        });
      } else {
        this.setState({
          currentCharacter: this.state.characters[currentIdx + 1],
        });
      }
    }
  };

  render() {
    return (
      <div className="Learn">
        <div className="Floor">
          <div className="Table">
            <div className="Brush">
              <div className="Engraving">
                <Container>
                  <Row>
                    <Col>
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
    );
  }
}
