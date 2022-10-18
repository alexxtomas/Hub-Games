import { $ } from "../utils/$"
import { removeComas } from "../utils/removeComas"

const QuestionAndAnswers = (question, answers) => {
    const questionContainer = $('.question')
    const answersContainer = $('.answers')

    questionContainer.innerHTML = `<span>${question}</span>` 
    const answersHTML = `
        <ol>
            ${answers.map((a, i) => `<li id="${i}">${a}</li>`)}
        </ol>
    `
    answersContainer.innerHTML = removeComas(answersHTML)
}


export default QuestionAndAnswers