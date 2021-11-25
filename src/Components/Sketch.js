import React from "react"
import Image from "react-bootstrap/image"
import sketch from "../Assets/sketch.png"

export default function Sketch(props) {
    return (
        <>
            <div className="sketchDiv">
                <Image 
                    src={sketch}
                    width={1522}
                />
            </div>
        </>
    )
}