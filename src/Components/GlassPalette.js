import React from 'react'
import Image from "react-bootstrap/Image"
import glasspalette from "../Assets/glassPalette.png"

export default function GlassPalette(props) {
    return (
        <>
        <div className="glassPaletteDiv">
        <Image 
            src={glasspalette}
            width={1522}
            height={571}
        />
        </div>
        </>
    )
}