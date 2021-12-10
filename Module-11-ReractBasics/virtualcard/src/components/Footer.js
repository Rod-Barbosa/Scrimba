import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


<i class="fab faGithubSquare"></i>

function Footer (){
    return (
        <footer>
{/* <a href="mailto:rodrigobarbosapro@gmail.com" target="_blank" rel="noreferrer"><button className="first-button"><FontAwesomeIcon className="contact-icon" icon={faEnvelopeSquare}/>Email</button></a> */}


            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="fontawesome"/></a>
            <br/>
            <a href="https://www.facebook.com/rodrigo.barbosa.7509" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className="fontawesome"/></a>
            <br/>
            
            <a href="https://www.instagram.com/av0idb0ringpe0ple/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="fontawesome"/></a>
            <br/>
            
            <a href="https://github.com/Rod-Barbosa" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} className="fontawesome"/></a>
        </footer>
    )
}

export default Footer