import Title from "../components/Title"
import { $ } from "../utils/$"
import { cleanMainAndPrintPage } from "../utils/cleanMainAndPrintPage"
import Hub from "./Hub"

const app = $('#app')

const Home = () => {
    app.innerHTML += `
      <main class="home">
      <h1>HUB-GAMES</h1> 
        <form>
            <label for="name">
            Introduce tu nombre
            </label>
            <input id="name" type="text" autocomplete="off">
            <button class="name-button">👍🏻</button>
        </form>
      </main>
      
    `
    const input = $('#name')
    console.log(input)
    const form = $('form')
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        window.localStorage.setItem('name', JSON.stringify(input.value))
        input.value = ''
        cleanMainAndPrintPage(Hub, 'hub')

    })
                  
}

export default Home