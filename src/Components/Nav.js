import React from "react"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

export default function Navigation(props) {
    return (
        <>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home"><Button className="mainSignIn">Sign In</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home"><Button className="mainSignUp">Sign Up</Button></Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
