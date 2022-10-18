const baseURL =' https://pokeapi.co/api/v2/pokemon'

const getPokemons = async (number = 151) => {
    let pokemons = []
    for (let i = 1; i <= number; i++) {
        const response = await fetch(`${baseURL}/${i}`)
        pokemons.push(await response.json())
    }

    return pokemons
}

const getPokemonById = async (id) => {
    const response = await fetch(`${baseURL}/${id}`)
    return response.json()
}

export default {getPokemons, getPokemonById}