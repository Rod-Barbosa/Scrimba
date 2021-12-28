import { nanoid } from "nanoid"
import React from "react"
import Question from "./components/Question"


//Created with curl command as explained in: https://quizapi.io/docs/1.0/overview#examples
// import Data from "./Data.json"


export default function App() {
    const [questions, setQuestions] = React.useState([])

    // console.log(Data)

        async function makeQuizz() {
            //like this there are always different questions
            const res = await fetch("https://quizapi.io/api/v1/questions?apiKey=2MNGrsL4UPNpkry9tGcvwEvrsd8AfZNYaGZWi3th&limit=5&category=Linux")
            const data = await res.json()
            // console.log(data)

            const prepedData = data.map((item, index)=>{
                const realAnswers = []
                const correctAnswer = []
                
                // console.log(item.correct_answers) //object
                for(let answer in item.correct_answers){
                    correctAnswer.push(item.correct_answers[answer])
                }
                // console.log(correctAnswer.indexOf("true"))

                for(let answer in item.answers){
                    if(item.answers[answer] !== null){
                        realAnswers.push(
                            {
                                id: nanoid(),
                                answer: item.answers[answer],
                                isSelected: false,
                                isCorrect: correctAnswer.indexOf("true") === index ? true : false
                            }
                            )
                        }
                    }

                return {
                    id: item.id,
                    question: item.question,
                    answers: realAnswers,
                    correct_answers: item.correct_answers
                }
            })

            setQuestions(prepedData)
     
        }

        function toggleSelection(id, questionId) {
            console.log("entrei")
            setQuestions(oldQuestions=>oldQuestions.map(question=>{
            return (question.id === questionId) ? 
            question.answers.map(answer=>{
                console.log("entrei aqui")
                console.log(answer)
                return answer.id === id ? 
                {
                    key: nanoid(),
                    id: nanoid(),
                    answer: answer.answer,
                    isSelected: !answer.isSelected,
                    isCorrect: answer.isCorrect
                }

                // {
                //     // ...answer,
                //     // key: nanoid(),
                //     isSelected: !answer.isSelected
                // } 
                : answer
            })
            
            : question
            
            }))
        }



        const questionsArray = questions.map(question=>(

        <Question 
                key={question.id} 
                question={question.question} 
                answers={question.answers}
                questionId={question.id}
                toggleSelection={toggleSelection}
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