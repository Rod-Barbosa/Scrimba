import React from "react"
import About from "./About"
import Avatar from "./Avatar"
import Contact from "./Contact"
import Footer from "./Footer"

function App (){
    return (
        <div classname="container">
            <Avatar />
            <Contact />
            <About />
            <Footer />
        </div>
    )
}

export default App