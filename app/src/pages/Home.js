import { $ } from "../utils/$"
import { cleanApp } from "../utils/cleanApp"
import Hub from "./Hub"

const app = $('#app')

const Home = () => {
    // cleanApp()
    app.innerHTML += `
      <main class="home">
      <h1>HUB-GAMES</h1> 
        <form>
            <label for="name">
            Introduce your name
            </label>
            <input id="name" type="text" autocomplete="off">
            <button class="name-button">👍🏻</button>
        </form>
      </main>
      
    `
    const input = $('#name')
    const form = $('form')
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        if(input.value === '' ||input.value === undefined ||input.value.length < 3) alert('Please introduce a valid name')
        else {
        window.localStorage.setItem('name', JSON.stringify(input.value))
        Hub()
        }
          
        input.value = ''

    })
                  
}

export default Home