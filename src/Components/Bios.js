import React from 'react'
// import Image from "react-bootstrap/Image"
import Carousel from "react-bootstrap/Carousel"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bredellPhoto from "../Assets/bredellPhoto.png"
import clayPhoto from "../Assets/clayPhoto.png"
import email from "../Assets/email.png"
import linkedin from "../Assets/linkedin.png"
import portfolio from "../Assets/portfolio.png"
import Button from "react-bootstrap/Button"
import Anchor from "react-bootstrap/Anchor"
import {Image} from "semantic-ui-react"
// import 'semantic-ui-css/semantic.min.css'

export default function Bios (props) {
    return (
        <>
            <Carousel fade variant="dark" controls={false} interval={null} className="bioDiv">
                <Carousel.Item>
                    <Row sm="4">
                        <Col  md={{ span: 2, offset: -1 }}>
                            <Image
                                className="bredellPhoto"
                                src={bredellPhoto}
                                // width={250}
                                // height={250}
                                alt="Bredell Evans's Bio"
                            />
                        </Col>
                        <Col xs="auto">
                        <Carousel.Caption className="bioInfo">
                            <h2>Bredell Evans J.R.</h2>
                            <h5>Full Stack Software Engineer/Software Developer</h5>
                            <p>An ambitions full stack engineer with an instructional design<br></br> background who uses step-by-step methodology in order to<br></br> identify logical solutions to problems.    
                            </p>
                        </Carousel.Caption>
                        </Col>
                        <Col className="bioIcons">
                            <Image 
                                src={linkedin}
                                className="linkedin"
                                as='a' 
                                href="http://www.linkedin.com/in/bredellevansjr"
                                target="_blank"
                            />
                            <Image 
                                src={email}
                                className="emailIcon"
                                as='a' 
                                href="mailto:bredy452@gmail.com"
                                target="_blank"
                            />
                            <Image 
                                src={portfolio}
                                className="portfolio"
                                as="a"
                                href="https://www.bredellportfolio.com"
                                target="_blank"
                            />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row sm="3">
                        <Col md={{ span: 2, offset: -1 }}>    
                            <Image
                                className="clayPhoto"
                                src={clayPhoto}
                                width={355}
                                height={355}
                                alt="Clay Gomes Bio"
                            />
                        </Col>
                        <Col xs="auto">
                        <Carousel.Caption className="bioInfo">
                            <h2>Clay Gomes</h2>
                            <h5>Aspiring Product Designer, UI/UX Design Engineer, Storyteller</h5>
                            <p>An aspiring product designer with a focus on UI/UX. He works to<br></br> understand each audience, strives to tell their stories, and curates<br></br> solutions through design
                            </p>
                        </Carousel.Caption>
                        </Col>
                        <Col className="bioIcons claybioIcons">
                            <Image 
                                className="linkedin"
                                src={linkedin}
                                as="a"  
                                href="https://www.linkedin.com/in/clay-gomes"
                                target="_blank"   
                            />
                            <Image 
                                src={email}
                                className="emailIcon"
                                as="a"
                                href="mailto:clayg612@gmail.com"
                                target="_blank"
                            />
                            <Image 
                                src={portfolio}
                                className="portfolio"
                                as="a"
                                href="https://xd.adobe.com/view/6f808926-beb5-412a-9d1f-2c1c9074150d-3ad3/?fullscreen"
                                target="_blank"
                            />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>  
        </>
    )
}