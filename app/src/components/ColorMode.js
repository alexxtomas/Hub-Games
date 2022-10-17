import { $ } from "../utils/$"
import { changeColor } from '../utils/changeColor'

const body = $('body')

const ColorMode = () => {
    const html =  `
        <div class="color-mode-container"><button class="color-mode"><i class="fa-solid fa-palette"></i> color mode</button></div>
    `
    body.insertAdjacentHTML('afterbegin', html)
    document.addEventListener('click', (evt) => {
        if(evt.target.className === 'color-mode' || evt.target.classList[1] === 'fa-palette') changeColor()
    })
}

export default ColorMode