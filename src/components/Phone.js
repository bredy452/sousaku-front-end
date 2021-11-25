import React from "react"
import Image from "react-bootstrap/Image"
import phone from "../assets/phone.png"
import Button from "react-bootstrap/Button"

export default function Phone (props) {
    return (
        <>
        <div className="phoneDiv">
            <Image src={phone} className="phone"/>
            <Button className="tryForFreeButton2">Try for free</Button>
        </div>
        </>
    )
}