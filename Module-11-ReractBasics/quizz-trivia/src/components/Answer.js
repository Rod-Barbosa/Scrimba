import React from "react"

export default function Answer(props){
// console.log(props)
    function clicked(id, questionId) {
        console.log(`cliquei aqui ${id} a pergunta é esa: ${questionId}`)
    }

    return(
        <button 
            className="answer--button"
            // onClick={()=>clicked(props.id, props.questionId)}
            onClick={()=>props.toggleSelection(props.id, props.questionId)}
            >
                {props.answer}
        </button>
    )
}