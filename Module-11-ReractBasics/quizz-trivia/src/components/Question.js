import React from "react"
import Answer from "./Answer"
import {nanoid} from "nanoid"

export default function Question(props){
// console.log(props.answers)

// function allNewQuestions(){

    const answersArray = []
    for(let answer in  props.answers){
        // console.log(props.answers[answer])
        if(props.answers[answer] !== null){
            answersArray.push(
                {
                    id: nanoid(),
                    answer: props.answers[answer],
                    isSelected: false
                }
                )
                
            }
        }        
// }
const [answers, setAnswers] = React.useState(answersArray)

console.log(answers)

function selectAnswer(id) {
    setAnswers(oldAnswers => oldAnswers.map(answer => {
        return answer.id === id ? 
            {...answer, isSelected: !answer.isSelected} :
            {...answer, isSelected: false}
    }))
    console.log(id)
}

// console.log(answersArray)
const answersDisplay = answersArray.map(answer=>(
    <Answer 
        key={answer.id}
        answer={answer.answer} 
        isSelected={answer.isSelected}
        selectAnswer={() => selectAnswer(answer.id)}
    />
))

    return (
        <div>
            <h4 className="question">{props.question}</h4>
            <div className="answers">
                {answersDisplay}

            </div>
            {/* {answersArray} */}
        </div>
    )
}