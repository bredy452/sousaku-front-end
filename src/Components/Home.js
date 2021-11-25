import React, { Component } from "react";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import appStore from "../Assets/appStore.png"
import android from "../Assets/android.png"
import webApp from "../Assets/webApp.png"

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="homeButtonDiv">
        <Button onClick={this.props.toggleIsLearning} className="tryForFreeButton">Try for Free</Button>
      </div>

      <Container className="appButtonsDiv">
      <Row xs="auto">
          <Col>
              <Image className="appStoreButton"
                src={appStore}/>
          </Col>
          <Col>
              <Image className="androidButton"
                  src={android}
               />
          </Col>
          <Col>
              <Image className="webAppButton"
                  src={webApp} 
              />
          </Col>
      </Row>
  </Container>
  </>
    );
  }
}
