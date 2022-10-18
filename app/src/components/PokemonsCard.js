import { $ } from "../utils/$"
import { removeComas } from "../utils/removeComas"


const PokemonsCard =  (pokemons, typeIcons) => {
    const pokemonsContainer = $('.pokemons-container')



    pokemonsContainer.innerHTML = ''

    pokemons.map((pokemon) => {
        let pokemonTypes = []
        pokemon.types.forEach(({type}) => {
           const {name} = type
           let a = typeIcons.find(({type}) => type === name)
           pokemonTypes.push(a)
        })

        pokemonsContainer.innerHTML += `
            <div class="pokemon-card" id="${pokemon.id}">
                <p class="pokemon-name" id="${pokemon.id}">${pokemon.name} </p>
                <img class="pokemon-image" src="${pokemon.sprites.front_default}" alt="image" id="${pokemon.id}">
                <div class="types-container" id="${pokemon.id}">
                    ${removeComas(pokemonTypes.map(({type, svg}) => `<img class="pokemon-type" src="${svg}" alt="${type} image" id="${pokemon.id}">`).toString())}
                </div>
            </div>
        `
    })
}

export default PokemonsCard