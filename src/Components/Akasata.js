import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import akasata from "../Assets/akasata.png"

export default function Akasata (props) {
    return (
        <>
        <Container className="akasataAndTextDiv" >
            <Row xs="auto" className="introduction">
                <Col>
                    <Image className="akasata"
                        src={akasata}
                        width={211.35}
                        height={1078} 
                    />
                </Col>
                <Col sm={9}>
                    <h3>
                        To learn Hiragana is to create a foundation for the rest of your Japanese.<br></br> By learning Hiragana, you will learn to the basics of Japanese writing.<br></br> It will also open doors to the Japanese resources you can use.
                    </h3><br></br>
                    <h3>
                       In essence, it's the first step to learn Japanese.
                    </h3><br></br>
                    <h3>
                        We at SkilCraft decided to take this essence & make it a reality.
                    </h3>
                    
                </Col>
            </Row>
        </Container>
        </>
    )
}