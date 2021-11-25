import React from "react"
import Image from "react-bootstrap/Image"
import handfan from "../Assets/handfan.png"


export default function HandFan(props) {
    return (
        <>
            <div className="handfanDiv">
                <Image 
                    className="handfan"
                    src={handfan}
                    width={1300}
                    height={1000} />
            </div>         
        </>
    )
}