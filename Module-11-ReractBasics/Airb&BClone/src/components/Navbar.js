import React from "react"
import airbnbLogo from "../images/airbnb-logo.png"
// import airbnblogo from "../../public/images/airbnb-logo.png"


function Navbar(){
    return (
            <nav className="navBar">
                <img className="navBar-logo" src={airbnbLogo} alt="react logo" />
            </nav>
    )
}


export default Navbar