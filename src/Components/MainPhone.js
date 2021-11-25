import React from "react"
import Image from "react-bootstrap/Image"
import mainPhone from "../Assets/mainPhone.png"

export default function MainPhone (props) {
    return (
        <>
        <div className="mainPhoneDiv">
            <Image src={mainPhone}/> 
        </div>
        </>
    )
}
