import Hub from '../pages/Hub'
import QuizNeo from '../pages/QuizNeo'
import { $ } from "../utils/$"
import { cleanApp } from '../utils/cleanApp'
import QuestionAndAnswers from "./QuestionAndAnswers"


const QuestionResult = (well, questions, index) =>  {
    const questionContainer = $('.question')
    const answersContainer = $('.answers')
    if(well[index - 1]) {
        answersContainer.innerHTML = `
            <div class="correctly">Yeaaaaahhhh!!🥳 <button class="next">Next</button></div>
        `
    } else {
        answersContainer.innerHTML = `  
        <div class="correctly">Oooohhh!😢 <button class="next">Next</button></div>
        `
    }

    if(index === 10) {
        let result = well.filter(r => r === true)

        if(result.length >= 5) questionContainer.innerHTML = `<span>Congratulations!! You got <span class="result">${result.length}/${questions.length}</span> rigth 😎</span>`
        else questionContainer.innerHTML = `Keep trying!! You got ${result.length}/${questions.length} rigth 😢`
            
        answersContainer.innerHTML = `<div class="correctly"><button class="return-hub">HUB</button> <button class="try-again">Try Again</button></div>"`
    }

    document.addEventListener('click', async (evt) => {
        const {className} = evt.target
        console.log(className)
        if(className === 'next') QuestionAndAnswers(questions[index].question, questions[index].answers)
        else if (className === 'return-hub') Hub()
        else if(className === 'try-again') await QuizNeo()
    })
}

export default QuestionResult