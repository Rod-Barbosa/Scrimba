import React from "react"
import mapIcon from "../images/googlemaps-red.png"

function Trips(props) {

    return (
        <div>
        <div className="trips--container">

            <img className="trips--image" src={`../images/${props.jpegImage}`} alt={props.title} />
            <div>
                <div className="trips--map">
                    <img className="trips--map--image"src={mapIcon} alt="map pin"/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} target='_blank' rel='noopener noreferrer'>View on Google Maps</a>
                </div>
                <h1 className="trips--title">{props.title}</h1>
                <div className="trips--dates">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                    <p className="trip--description">{props.description}</p>
            </div>
        </div>
            <hr className="trips--border-bottom" />
        </div>
    )
}

export default Trips