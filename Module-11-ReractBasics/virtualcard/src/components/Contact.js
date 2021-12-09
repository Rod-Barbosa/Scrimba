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
            <div>
                <button><FontAwesomeIcon icon={faEnvelopeSquare}/>Email</button>
                <button><FontAwesomeIcon icon={faLinkedin}/>LinkedIn</button>
            </div>
        </div>
    )
}

export default Contact