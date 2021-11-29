export const getPokemon = async (search) => await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((res) => res.status !== 404 ? res.json() : { status: 404, msg: "error, no encontramos lo que buscas" })
    .then(res => res)
    .catch(err => err);