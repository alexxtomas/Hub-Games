

const Hub = () => {
    const user = JSON.parse(window.localStorage.getItem('name'))

    return `
        <h2 class="welcome">Bievenido 👋🏻 ${user}</h2>
        <div class="noughts-and-crosses">Noughts and Crosses</div>
        <div class="waka-topo">Waka Topo</div>
        <div class="memory-game">Memory Game</div>
        <div class="hang-man">Hang Man</div>
        <div class="pokeapi">PokeApi</div>
        <div class="quiz-neo">Quiz Neo</div>
    `
}

export default Hub