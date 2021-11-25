import React from 'react'
import Image from "react-bootstrap/Image"
import Carousel from "react-bootstrap/Carousel"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bredellPhoto from "../assets/bredellPhoto.png"
import clayPhoto from "../assets/clayPhoto.png"

export default function Bios (props) {
    return (
        <>
            <Carousel fade variant="dark" controls={false} interval={null} className="bioDiv">
                <Carousel.Item>
                    <Row>
                        <Col>
                        <Image
                        className="bredellPhoto"
                        src={bredellPhoto}
                        width={250}
                        height={250}
                        alt="Bredell Evans's Bio"
                        />
                        </Col>
                    <Col xs={8}>
                    <Carousel.Caption className="bioInfo">
                        <h2>Bredell Evans J.R.</h2>
                        <h5>Full Stack Software Engineer/Software Developer</h5>
                        <p>An ambitions full stack engineer with an instructional design<br></br> background who uses step-by-step methodology in order to<br></br> identify logical solutions to problems.    
                        </p>
                    </Carousel.Caption>
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>    
                        <Image
                        className="clayPhoto"
                        src={clayPhoto}
                        width={250}
                        height={250}
                        alt="Clay Gomes Bio"
                        />
                        </Col>
                    <Col sm={8}>
                    <Carousel.Caption className="bioInfo">
                        <h2>Clay Gomes</h2>
                        <h5>Aspiring Product Designer, UI/UX Design Engineer, Storyteller</h5>
                        <p>An aspiring product designer with a focus on UI/UX. He works to<br></br> understand each audience, strives to tell their stories, and curates<br></br> solutions through design</p>
                    </Carousel.Caption>
                    </Col>
                </Row>
                </Carousel.Item>
            </Carousel>  
        </>
    )
}