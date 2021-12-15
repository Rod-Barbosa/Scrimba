import React from "react"
import globe from "../images/cropped-globe-icon-white.png"

function Navbar (){
    return (
        <div className="navbar--container">
            <img className="navbar--image" src={globe} alt="globe" />
            <p>my travel journal</p>
        </div>
    )
}

export default Navbar