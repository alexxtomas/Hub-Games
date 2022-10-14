import { $ } from "./$"


export const changeColor = () => {
    const colors = ["rgb(230, 73, 128)", "rgb(250, 176, 5)", "rgb(130, 201, 30)", "rgb(76,110,245)", "rgb(21, 170, 191)", "rgb(250, 82, 82)", "rgb(190, 75, 219)", "rgb(121, 80, 242)"]
    let randomIndex =  Number.parseInt(Math.random() * (colors.length + 1))
    const body = $('body')
    const {backgroundColor} = getComputedStyle(body)

    if(backgroundColor === colors[randomIndex]) while(backgroundColor === colors[randomIndex]) randomIndex = Number.parseInt(Math.random() * (colors.length + 1))
    body.style ['background-color'] = colors[randomIndex]
        
    
    
}

