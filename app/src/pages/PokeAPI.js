import PokemonDetails from "../components/PokemonDetails"
import PokemonsCard from "../components/PokemonsCard"
import PokemonsFilter from "../components/PokemonsFilter"
import pokeApi from "../services/pokeApi"
import { $ } from "../utils/$"
import { cleanApp } from "../utils/cleanApp"

const app = $('#app')
const PokeApi = async () => {
    cleanApp()

    const pokemons = await pokeApi.getPokemons(151)

    
    const typeIcons = [
        {type:"bug", svg: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg"}, 
        {type: "dark", svg: "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg"},
        {type: "dragon", svg: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg"},
        {type: "electric", svg: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg"},
        {type: "fairy", svg: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg"},
        {type: "fighting", svg: "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg"},
        {type: "fire", svg: "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg"},
        {type: "flying", svg: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg"},
        {type: "ghost", svg: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg"},
        {type: "grass", svg: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg"},
        {type: "ground", svg: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg"},
        {type: "ice", svg: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg"},
        {type: "normal", svg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg"},
        {type: "poison", svg: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg"},
        {type: "psychic", svg: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg"},
        {type: "rock", svg: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg"},
        {type: "steel", svg: "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg"},
        {type: "water", svg: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg"},
        
]


   app.innerHTML = ` 
   <main class="pokeapi-section">
       <img class="pokemon-title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon Logo">
        ${PokemonsFilter(pokemons, typeIcons)}
        <div class="pokemons-container"></div>
    </main>
    `

     PokemonsCard(pokemons, typeIcons)

    const nameFilter = $('#name-filter')
    nameFilter.addEventListener('input', (evt) => {
        const {value} = evt.target
        const filtredPokemons = pokemons.filter(({name}) => name.toUpperCase().includes(value.toUpperCase()))
        PokemonsCard(filtredPokemons, typeIcons)
    })

    const typeFilter = $('#type-filter')
    typeFilter.addEventListener('change', (evt) => {
        const {value} = evt.target
        let filtredPokemons = []
        if(value === '') PokemonsCard(pokemons, typeIcons)
        else { pokemons.map((pokemon) => {
                let matchType = []
                pokemon.types.forEach(({type}) => {
                    if(type.name === value) matchType.push(true)
                    else matchType.push(false)
                })

                if(matchType.includes(true)) filtredPokemons.push(pokemon)
            })
            PokemonsCard(filtredPokemons, typeIcons)
        }
    })

    const pokemonCards = document.querySelectorAll('.pokemons-container > .pokemon-card')
    pokemonCards.forEach(card => {
        card.addEventListener('click', async (evt) => {
            await PokemonDetails(evt.target.id)
        })
    })
}

export default PokeApi