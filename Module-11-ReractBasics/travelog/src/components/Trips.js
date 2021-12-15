import React from "react"
import mapIcon from "../images/googlemaps-red.png"

function Trips(props) {

    return (
        <div className="trips--container">

            <img className="trips--image" src={`../images/${props.jpegImage}`} alt={props.title} />
            <div>
                <div className="trips--map">
                    <img className="trips--map--image"src={mapIcon} alt="map pin"/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} target='_blank' rel='noopener noreferrer'>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <div className="trips--dates">
                    <p>{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Trips