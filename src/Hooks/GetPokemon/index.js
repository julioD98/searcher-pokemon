import { useEffect, useState } from "react"
import { getPokemon } from "../../Api/PokeApi";

export const useGetPokemon = (search = "") => {
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        getPokemon(search).then(res => res.status !== 404 ? setPokemon({
            status: 200,
            name: res.name,
            img: res.sprites.other["official-artwork"].front_default,
            types: [...res.types],
            stats: {
                hp: res.stats[0].base_stat,
                atk: res.stats[1].base_stat,
                def: res.stats[2].base_stat,
                spe_atk: res.stats[3].base_stat,
                spe_def: res.stats[4].base_stat,
                speed: res.stats[5].base_stat
            }
        }) : setPokemon(res))
    }, [search]);
    return pokemon;
}
