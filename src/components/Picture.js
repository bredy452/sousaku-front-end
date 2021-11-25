import React, {Component} from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import japanesepicture from "../assets/picture.png";

export default function JapanesePicture (props) {
    return (
        <Container className="japanesePictureContainer" >
            <Row>
                <Col>
                    <Image className="logo"
                        src={japanesepicture} 
                        width={1360} 
                        height={1614.93}/>
                </Col>
            </Row>
        </Container>
    )
}