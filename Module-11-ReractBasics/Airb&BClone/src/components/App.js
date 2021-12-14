import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import dataSet from "../data.json"


function App (){

const eventsArray = dataSet.map(activity=>
    <Card 
        key={activity.id}
        activity={activity}
        // {...activity}
    />
        // Key={activity.id}
        // img={activity.coverImg}
        // rating={activity.stats.rating}
        // reviewCount={activity.stats.reviewCount}
        // location={activity.location}
        // title={activity.title}
        // price={activity.price}
        // openSpots={activity.openSpots}
)

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="cards-list">
            {eventsArray}
            </section>

        </div>
    )
}

export default App