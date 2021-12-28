import React from "react"
import Question from "./components/Question"

//Created with curl command as explained in: https://quizapi.io/docs/1.0/overview#examples
import Data from "./Data.json"


export default function App() {
    const [questions, setQuestions] = React.useState([])

    // console.log(Data)

        async function makeQuizz() {
            //like this there are always different questions
            const res = await fetch("https://quizapi.io/api/v1/questions?apiKey=2MNGrsL4UPNpkry9tGcvwEvrsd8AfZNYaGZWi3th&limit=5&category=Linux")
            const data = await res.json()
            setQuestions(data)
            // console.log(data)
        }

        const questionsArray = questions.map(question=>(
            <Question 
                key={question.id} 
                question={question.question} 
                answers={question.answers}
            />
            ))
            
            return (
                <main>
            {questions.length > 0
            ?
            <div>
                {questionsArray}
                <button className="checkAnswers-button" >Check answers</button>
            </div>
            :
            <div >
                <h1>Quizzical</h1>
                <p>Linux101
                    <br /> 
                    <span>easier than dropping out</span>
                </p>
                <button className="makeQuiz-button" onClick={makeQuizz}>Start Quiz</button>
            </div>
        }
        </main>
    )
}