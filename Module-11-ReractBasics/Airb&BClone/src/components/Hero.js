import React from "react"
import photoGrid from "../images/photo-grid.png"
// ../../public/images/airbnb-logo.png


function Hero (){
    
    
    return (
        <div className="hero-container">
            <img className="hero-image" src={photoGrid} alt="react logo" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero