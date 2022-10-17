import { $ } from "../utils/$"
import QuestionAndAnswers from "./QuestionAndAnswers"


const QuestionResult = (well) =>  {
    const answersContainer = $('.answers')
    if(well) {
        answersContainer.innerHTML = `
            <div class="correctly">Yeaaaaahhhh!!🥳 <button class="next">Next</button></div>
        `
        
    }

    document.addEventListener('click', (evt) => {
        if(evt.target.className === 'next') {
            QuestionAndAnswers(questions[index].question, questions[index].answers)
        }
    })
}

export default QuestionResult