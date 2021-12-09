import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


<i class="fab faGithubSquare"></i>

function Footer (){
    return (
        <footer>

            <FontAwesomeIcon icon={faFacebookSquare} className="fontawesome"/>
            <br/>
            <FontAwesomeIcon icon={faTwitterSquare} className="fontawesome"/>
            <br/>
            <FontAwesomeIcon icon={faInstagramSquare} className="fontawesome"/>
            <br/>
            <FontAwesomeIcon icon={faGithubSquare} className="fontawesome"/>
        </footer>
    )
}

export default Footer