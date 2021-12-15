import React from "react"
import Navbar from "./Navbar"
import Trips from "./Trips"
import tripsData from "../trips.json"

function App (){

    // console.log(tripsData)
    const tripsArr = tripsData.map((trip, counter)=>

        <Trips 
            key={counter}
            title={trip.title}
            location={trip.location}
            googleMapsUrl={trip.googleMapsUrl}
            startDate={trip.startDate}
            endDate={trip.endDate}
            description={trip.description}
            imageUrl={trip.imageUrl}
            jpegImage={trip.jpegImage}
        />
    )

    return (
        <div className="container">
            <Navbar />
            {tripsArr}
        </div>
    )
}

export default App