import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "../Assets/logo.png";

export default function Logo (props) {

    return (
        <>
        <Container className="logoContainer">
            <Row>
                <Col>
                    <Image className="logo"
                        src={logo} 
                        width={534.44} 
                        height={646}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}