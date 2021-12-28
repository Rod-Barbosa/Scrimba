import React from "react"

export default function Answer(props){
    const styles = {
        backgroundColor: props.isSelected ? "#59E391" : "white"
    }
    return(
        <button 
            className="answer--button"
            style={styles}
            onClick={props.selectAnswer}
            >
                {props.answer}
        </button>
    )
}