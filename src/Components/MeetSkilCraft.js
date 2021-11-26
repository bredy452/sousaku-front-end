import React from 'react'
import Image from "react-bootstrap/Image"
import meetSkilCraft from "../Assets/meetSkilCraft.png"

export default function MeetSkilCraft(props) {
    return (
        <>
            <div className="meetSkilCraftDiv">
                <Image 
                    src={meetSkilCraft}
                    className="meetSkilCraft"
                />
            </div>
        </>
    )
}