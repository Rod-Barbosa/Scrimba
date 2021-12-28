import React from "react"
import Answer from "./Answer"
// import {nanoid} from "nanoid"

export default function Question(props){

    const answersDisplay = props.answers.map(resposta=>(
        <Answer 
            key={resposta.id}
            answer={resposta.answer}
            id={resposta.id}
            questionId={props.questionId}
            toggleSelection={props.toggleSelection}
        />
    ))
    // console.log(answersDisplay)

    return (
        <div>
            <h4 className="question">{props.question}</h4>
            <div className="answers">
                {answersDisplay}

            </div>
        </div>
    )
}