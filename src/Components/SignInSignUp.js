import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"
import appStore from "../Assets/appStore.png";
import android from "../Assets/android.png";
import webApp from "../Assets/webApp.png";
import platforms from "../Assets/platforms.png"
import apple from "../Assets/apple.png"
import facebook from "../Assets/facebook.png"
import googleplus from "../Assets/googleplus.png"

export default function SignInSignUp (props) {
    return (
        <>     
        <Container className="platformsDiv">
          <Row>
            <Col>
                <Image 
                className="platforms"
                src={platforms}
                width={527}
                height={371} />
            </Col>
            <Col className= "signButtons">
                <Button className="signIn">Sign In</Button>
                <Button className="signUp">Sign Up</Button>
            </Col>

            </Row>
            <Row xs="auto">
            <Col>
              <Image className="appStoreButton" src={appStore} />
            </Col>
            <Col>
              <Image className="androidButton" src={android} />
            </Col>
            <Col>
              <Image className="webAppButton" src={webApp} />
            </Col>
            <Col className="signText">
                <h3>Or</h3>
                <h3>Sign in / up using</h3>
                
            </Col>
            <Col>
            <div className="icons">
                    <Image 
                        src={facebook}
                        className="facebookIcon"
                        width={112}
                        height={114} />
                    <Image 
                        src={googleplus}
                        className="googlePlusIcon"
                        width={112}
                        height={114} />
                    <Image 
                        src={apple}
                        width={112}
                        height={114} 
                        className="appleIcon" />
                </div>
            </Col>
          </Row>
        </Container>
        </>
    )
}