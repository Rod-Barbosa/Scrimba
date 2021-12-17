import React from "react"

export default function Meme (){
    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="your text here"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="your text here"
                    className="form--input"
                />
                <button 
                    className="form--button"
                >
                    Get a new meme image  🖼
                </button>
            </form>
        </main>


        // <div className="meme--container">
        //     <div className="meme--user-input--div">
        //         <input className="meme--user--input" type="text"  placeholder="Shut up"/>
        //         <input className="meme--user--input" type="text"  placeholder="and take my money"/>
        //     </div>
        //     <button className="meme--get-button">Get a new meme image  🖼</button>
        // </div>
    )
}