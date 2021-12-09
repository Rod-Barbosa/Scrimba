import React from "react"
import avatar from "../images/avatar.png"

function Avatar (){
    return (
        <header>
            <img className="avatar-img" src={avatar} alt="Rodrigo Barbosa faceshot"/>
        </header>
    )
}

export default Avatar