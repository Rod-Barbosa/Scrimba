import React from "react"
import starPic from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.activity.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.activity.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.activity.coverImg}`} className="card--image" alt="activities"/>
            <div className="card--stats">
                <img src={starPic} className="card--star" alt="star"/>
                <span>{props.activity.rating}</span>
                <span className="gray">({props.activity.reviewCount}) • </span>
                <span className="gray"> {props.activity.location}</span>
            </div>
            <p className="card--title">{props.activity.title}</p>
            <p className="card--price"><span className="bold">From ${props.activity.price}</span> / person</p>
        </div>
    )
}

