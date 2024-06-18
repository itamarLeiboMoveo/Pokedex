
export async function getPokemonsList(offset : number) {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
        const pokemonList = await data.json();
        return pokemonList.results;
    }
    catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

export async function getPokemon(pokeId) {
    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeId);
        const pokemonData = await data.json();
        const typesArray: string[] = [];
        pokemonData.types.forEach((type) => {
            typesArray.push(type.type.name);
        });
        const descData = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemonData.name);
        const pokemonSpecies = await descData.json();
        const description = pokemonSpecies.flavor_text_entries[0].flavor_text;

        const stats = {
            hp: pokemonData.stats[0].base_stat,
            attack: pokemonData.stats[1].base_stat,
            defense: pokemonData.stats[2].base_stat,
            special_atk: pokemonData.stats[3].base_stat,
            special_def: pokemonData.stats[4].base_stat,
            speed: pokemonData.stats[5].base_stat,
            total: pokemonData.stats[0].base_stat
                + pokemonData.stats[1].base_stat
                + pokemonData.stats[2].base_stat
                + pokemonData.stats[3].base_stat
                + pokemonData.stats[4].base_stat
                + pokemonData.stats[5].base_stat
        }

        const wantedPokemon: pokemon = {
            id: pokeId,
            img: pokemonData.sprites.front_default,
            name: pokemonData.name,
            types: typesArray,
            description,
            stats
        };
        return wantedPokemon;
    }
    catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

async function fetchPokemons({ offset }: { offset: number })  {
    const pokemons: pokemon[] = [];
    try {
        const pokemonList = await getPokemonsList(offset);
        for (const poke of pokemonList) {
            const data = await fetch(poke.url);
            const pokemonData = await data.json();
            const pokemonObj: pokemon = (await getPokemon(pokemonData.id))!;

            if(pokemonObj)
                pokemons.push(pokemonObj);
        }
    }
    catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }

    return pokemons;
}

export default fetchPokemons;