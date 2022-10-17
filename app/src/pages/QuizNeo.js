import QuestionAndAnswers from "../components/QuestionAndAnswers"
import QuestionResult from "../components/QuestionResutl"
import quiz from "../services/quiz"
import { $ } from "../utils/$"
import { cleanApp } from "../utils/cleanApp"
import { getName } from "../utils/getName"


const app = $('#app')

 const QuizNeo =  async () => {
    cleanApp()
    const user = getName()
    let index = 0
    const questions = await quiz.getAllQuestions()
    const {question, answers} = questions[index]
    app.innerHTML = `
    <main class="quiz-neo-game">
      <h2 class="welcome">Hi ${user}! Welcome to QuizNeo</h2>
      <div class="question"></div>
      <div class="answers"></div>
    </main>

    `
    QuestionAndAnswers(question, answers)
    let well = []
    document.addEventListener('click', (evt) => {
      const {id} = evt.target
      if(id === '0' || id === '1' ||id === '2' ||id === '3') {
         const answered = evt.target.innerText
         well[index] = questions[index].correctAnswer === answered ? true : false
         index += 1
         QuestionResult(well, questions, index)
      }

    })
   

 }

//  ${questions[0].question}

//  <ol>
//          <li id="a">${questions[0].answers[0]}</li>
//          <li id="b">${questions[0].answers[1]}</li>
//          <li id="c">${questions[0].answers[2]}</li>
//          <li id="d">${questions[0].answers[3]}</li>
//       </ol>  

 export default QuizNeo

