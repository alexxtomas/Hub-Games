import Home from '../pages/Home'
import Hub from '../pages/Hub'
import { $ } from "../utils/$"
import { changeColor } from '../utils/changeColor'
import { cleanApp } from '../utils/cleanApp'
import { getName } from '../utils/getName'

const body = $('body')

const ColorMode = () => {
    const html =  `
        <div class="color-mode-container"> <i class="fa-solid fa-house-chimney home-icon"></i>  <button class="color-mode"><i class="fa-solid fa-palette"></i> color mode</button></div>
    `
    body.insertAdjacentHTML('afterbegin', html)
    document.addEventListener('click', (evt) => {
        const {className} = evt.target
        const {classList} = evt.target
        if(className === 'color-mode' || classList[1] === 'fa-palette') changeColor()
        else if (classList[2] === 'home-icon') {
            cleanApp()
            const name = getName()
            if(name === null) Home()
            else Hub()
                   }
    })
}

export default ColorMode