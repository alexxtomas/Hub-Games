import { $ } from "../utils/$"
import { cleanApp } from "../utils/cleanApp"
import { getName } from "../utils/getName"
import QuizNeo from "./QuizNeo"



const app = $('#app')


const Hub = () => {
    cleanApp()
    const user = getName()
    app.innerHTML += `
        <main class="hub">
            <h2 class="welcome">Welcome 👋🏻 ${user}</h2>
            <div class="noughts-and-crosses">Noughts and Crosses</div>
            <div class="waka-topo">Waka Topo</div>
            <div class="memory-game">Memory Game</div>
            <div class="hang-man">Hang Man</div>
            <div class="pokeapi">PokeApi</div>
            <div class="quiz-neo">Quiz Neo</div>
        </main>
    `
    document.addEventListener('click', async (evt) => {
        const {className} = evt.target

        if(className === 'noughts-and-crosses') console.log('a')
        else if(className === 'waka-topo') console.log('a')
        else if(className === 'memory-game') console.log('a')
        else if(className === 'hang-man') console.log('a')
        else if(className === 'pokeapi') console.log('a')
        else if(className === 'quiz-neo') await QuizNeo()
    })
}
export default Hub