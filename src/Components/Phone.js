import React from "react"
import Image from "react-bootstrap/Image"
import phone from "../Assets/phone.png"
import Button from "react-bootstrap/Button"

export default function Phone (props) {
    return (
        <>
        <div className="phoneDiv">
            <Image src={phone} className="phone"/>
            <Button className="tryForFreeButton2" onClick={props.toggleIsLearning}>Try for free</Button>
        </div>
        </>
    )
}