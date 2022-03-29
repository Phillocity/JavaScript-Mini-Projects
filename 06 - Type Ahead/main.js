const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=40&limit=1000000'

let pokemons = []

fetch(pokeAPI)
  .then(response => response.json())
  .then((data) => {

    data.results.forEach(pokemon => {
      pokemons.push(pokemon.name)
    })
  })

console.log(pokemons)
