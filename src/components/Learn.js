import "./Learn.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CanvasDraw from "react-canvas-draw";
import getCharacters from "../getCharacters";
import Badge from "react-bootstrap/Badge";
import writeA from "../assets/writeA.png";
import writeKa from "../assets/writeKa.png";
import writeSa from "../assets/writeSa.png";
import writeTa from "../assets/writeTa.png";
import writeNa from "../assets/writeNa.png";
import writeHa from "../assets/writeHa.png";
import writeMa from "../assets/writeMa.png";
import writeYa from "../assets/writeYa.png";
import writeRa from "../assets/writeRa.png";
import writeWa from "../assets/writeWa.png";
import writeN from "../assets/writeN.png";
import table from "../assets/table.png";
import tableSide from "../assets/tableSide.png";
import engraving from "../assets/engraving.png";
import paintColors from "../assets/paintColors.png";
import brush from "../assets/brush.png";
import paintRight from "../assets/paintRight.png";
import floor from "../assets/floor.png";
import brushStroke from "../assets/brushStroke.png";
import splat from "../assets/splat.png";
import fan from "../assets/fan.png";
import leaves from "../assets/leaves.png";
import hiraganaBoard from "../assets/hiraganaBoard.png";
import scrolls from "../assets/scrolls.png";
import papers from "../assets/papers.png";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import middleButton from "../assets/middleButton.png";
import mobileA from "../assets/amobileLetters.png";
import mobileKa from "../assets/kamobileLetters.png";
import mobileSa from "../assets/samobileLetters.png";
import mobileTa from "../assets/tamobileLetters.png";
import mobileNa from "../assets/namobileLetters.png";
import mobileHa from "../assets/hamobileLetters.png";
import mobileMa from "../assets/mamobileLetters.png";
import mobileYa from "../assets/yamobileLetters.png";
import mobileRa from "../assets/ramobileLetters.png";
import mobileWa from "../assets/wamobileLetters.png";
import mobileN from "../assets/nmobileLetters.png";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

let trace = [
  writeA,
  writeKa,
  writeSa,
  writeTa,
  writeNa,
  writeHa,
  writeMa,
  writeYa,
  writeRa,
  writeWa,
  writeN,
];

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
        images: "",
      },
      nextCharacter: 1,
      hiraganaCharacter: 1,
      // Canvas
      brushRadius: 4,
      canvasWidth: 250,
      canvasHeight: 200,
      lazyRadius: 0,
      hideGridX: true,
      hideGridY: true,
      imgSrc: trace[0],
      disabled: false,
    };
  }

  componentDidMount() {
    this.setState({
      currentCharacter: this.state.characters[0],
    });
  }

  changeCharacterForward = (e) => {
    console.log(this.state.hiraganaCharacter);
    e.preventDefault();
    if (this.state.nextCharacter < 46 && this.state.hiraganaCharacter === 5) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[1],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 10
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[2],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 15
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[3],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 20
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[4],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 25
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[5],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 30
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[6],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 35
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[7],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 38
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[8],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 43
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[9],
      });
    } else if (
      this.state.nextCharacter < 46 &&
      this.state.hiraganaCharacter === 45
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
        imgSrc: trace[10],
      });
    } else if (this.state.nextCharacter < 46) {
      
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter + 1,
        nextCharacter: this.state.nextCharacter + 1,
        currentCharacter: this.state.characters[this.state.nextCharacter],
      });
    }
  };

  changeCharacterBackwards = (e) => {
    console.log(this.state.hiraganaCharacter);
    e.preventDefault();
    if (this.state.nextCharacter > 0 && this.state.hiraganaCharacter <= 1) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[0],
        imgSrc: trace[0],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 6
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[5],
        imgSrc: trace[1],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 11
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[10],
        imgSrc: trace[2],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 16
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[15],
        imgSrc: trace[3],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 21
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[20],
        imgSrc: trace[4],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 26
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[25],
        imgSrc: trace[5],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 31
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[30],
        imgSrc: trace[6],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 36
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[35],
        imgSrc: trace[7],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 39
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[38],
        imgSrc: trace[8],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 44
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[43],
        imgSrc: trace[9],
      });
    } else if (
      this.state.nextCharacter > 0 &&
      this.state.hiraganaCharacter === 46
    ) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[45],
        imgSrc: trace[10],
      });
    } else if (this.state.nextCharacter > 0) {
      this.setState({
        hiraganaCharacter: this.state.hiraganaCharacter - 1,
        nextCharacter: this.state.nextCharacter - 1,
        currentCharacter: this.state.characters[this.state.nextCharacter - 1],
      });
    }
  };

  // target = (e) => {
  //   console.log(e.clientX);
  //   if (
  //     e.clientX > 1300 &&
  //     e.clientX < 1319 &&
  //     e.clientY < 231 &&
  //     e.clientY > 132
  //   ) {
  //     this.setState({
  //       brushRadius: 6,
  //     });
  //     // console.log("yes6")
  //   } else if (
  //     e.clientX > 1340 &&
  //     e.clientX < 1355 &&
  //     e.clientY < 231 &&
  //     e.clientY > 132
  //   ) {
  //     this.setState({
  //       brushRadius: 4,
  //     });
  //   } else if (
  //     e.clientX > 1371 &&
  //     e.clientX < 1391 &&
  //     e.clientY < 231 &&
  //     e.clientY > 132
  //   ) {
  //     this.setState({
  //       brushRadius: 2,
  //     });
  //   }
  // };

  render() {
    return (
      <>
        {console.log(this.state.imgSrc, this.state.images)}
        <div className="App">
          <div>
            <Image src={floor} fluid className="floor" />
          </div>
          <div className="fanDiv">
            <Image src={fan} fluid className="fan" />
          </div>
          <div className="tableDiv">
            <Image src={table} fluid className="table" />
          </div>
          <div className="tableSideDiv">
            <Image src={tableSide} fluid className="tableSide" />
          </div>
          <div className="engravingDiv">
            <Image src={engraving} fluid className="engraving" />
          </div>
          <div className="paintColorsDiv">
            <Image src={paintColors} fluid className="paintColors" />
          </div>
          <div className="brushDiv">
            <Image src={brush} fluid className="brush" />
          </div>
          <div fluid className="paintRightDiv">
            <Image src={paintRight} fluid className="paintRight" />
          </div>
          <div fluid className="brushStrokeDiv">
            <Image src={brushStroke} fluid className="brushStoke" />
          </div>
          <div className="splatDiv">
            <Image src={splat} fluid className="splat" />
          </div>
          <div className="leavesDiv">
            <Image src={leaves} fluid className="leaves" />
          </div>
          <div className="hiraganaBoardDiv">
            <Image src={hiraganaBoard} fluid className="hiraganaBoard" />
          </div>
          <div className="scrollsDiv">
            <Image src={scrolls} fluid className="scrolls" />
          </div>
          <div className="papersDiv">
            <Image src={papers} fluid className="papers" />
          </div>
          <Container className="drawing">
            <Row>
              <Col
                md={{
                  span: 3,
                  offset: 4,
                }}
              >
                <div className="canvas">
                  <CanvasDraw className="canvasDraw"
                    brushRadius={this.state.brushRadius}
                    canvasWidth={this.state.canvasWidth}
                    canvasHeight={this.state.canvasHeight}
                    lazyRadius={this.state.lazyRadius}
                    hideGridX={this.state.hideGridX}
                    hideGridY={this.state.hideGridY}
                    imgSrc={this.state.imgSrc}
                    disabled={this.state.disabled}
                    // onClick={(e) => {console.log(e)}}
                  />
                </div>
              </Col>
              <Col
                md={{
                  span: 5,
                }}
              >
                <div className="character">
                  <Image
                    className="hiragana"
                    src={this.state.currentCharacter.animation}
                    width={120}
                    alt={this.state.currentCharacter.romaji}
                  />
                  <figure className="audio">
                    <audio
                      controls
                      src={this.state.currentCharacter.pronunciation}
                    >
                      Your browser does not support the <code>audio</code>{" "}
                      element.
                    </audio>
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="letters">
          <Image src={mobileA} fluid className="mobileA" />
          <Image src={mobileKa} fluid className="mobileKa" />
          <Image src={mobileSa} fluid className="mobileSa" />
          <Image src={mobileTa} fluid className="mobileTa" />
          <Image src={mobileNa} fluid className="mobileNa" />
          <Image src={mobileHa} fluid className="mobileHa" />
          <Image src={mobileMa} fluid className="mobileMa" />
          <Image src={mobileYa} fluid className="mobileYa" />
          <Image src={mobileRa} fluid className="mobileRa" />
          <Image src={mobileWa} fluid className="mobileWa" />
          <Image src={mobileN} fluid className="mobileN" />
        </div>
        <div className="prevNextButtons">
          <Image
            src={leftArrow}
            fluid
            className="leftArrow"
            onClick={(e) => this.changeCharacterBackwards(e)}
          />
          <Image src={middleButton} fluid className="middleButton" />
          <Image
            src={rightArrow}
            fluid
            className="rightArrow"
            onClick={(e) => this.changeCharacterForward(e)}
          />
        </div>
      </>
    );
  }
}
