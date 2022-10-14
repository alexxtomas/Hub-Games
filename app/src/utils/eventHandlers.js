import { $ } from "./$"
import { changeColor } from "./changeColor"

export const eventHandlers = () => {
    // Change Color
    const btn = $('.color-mode')
    btn.addEventListener('click', (evt) => changeColor())
}

