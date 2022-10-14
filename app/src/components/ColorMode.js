import { $ } from "../utils/$"

const app = $('#app')

const ColorMode = () => {
    app.innerHTML += `
        <div class="color-mode-container"><button class="color-mode"><i class="fa-solid fa-palette"></i> color mode</button></div>
    `
   
}

export default ColorMode