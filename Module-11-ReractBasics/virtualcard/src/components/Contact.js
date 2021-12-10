import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact (){
    return (
        <div className="contact">
            <h1>Rodrigo Barbosa</h1>
            <h4>Frontend Developer</h4>
            <p><a className="gelato-link" href="https://gelatodigital.com/"  target="_blank" rel="noreferrer">gelatodigital.com</a></p>
            <div className="contact-buttons">
                <a href="mailto:rodrigobarbosapro@gmail.com" target="_blank" rel="noreferrer"><button className="first-button"><FontAwesomeIcon className="contact-icon" icon={faEnvelopeSquare}/>Email</button></a>
                <a href="https://www.linkedin.com/in/rodrigo-piedade-barbosa/" target="_blank" rel="noreferrer"><button className="second-button"><FontAwesomeIcon className="contact-icon" icon={faLinkedin}/>LinkedIn</button></a>
            </div>
        </div>
    )
}

export default Contact