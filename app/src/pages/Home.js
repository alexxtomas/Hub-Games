import NameInput from "../components/NameInput"
import Title from "../components/Title"
import { $ } from "../utils/$"

const app = $('#app')

const Home = () => {
    app.innerHTML += `
      <main>
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
    const input = $('.name')
    const form = $('form')
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        window.localStorage.setItem('name', JSON.stringify(input.value))
        input.value = ''
    })
                  
}

export default Home