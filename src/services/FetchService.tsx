
async function fetchPokemons() {
    type stats = {
        hp: number,
        attack: number,
        defense: number,
        special_atk: number,
        special_def: number,
        speed: number,
        total: number
    }

    type pokemon = {
        id: number,
        img: string,
        name: string,
        types: string[],
        description: string,
        stats: stats
    }
    const pokemons: pokemon[] = [];
    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const pokemonList = await data.json();
        const typesArray: string[] = [];
        for (let i = 0; i < 100; i++) {
            const pokemonObj = pokemonList.results[i]; // Accessing the first pokemon in the list
            const data2 = await fetch(pokemonObj.url);
            const pokemonData = await data2.json();
            pokemonData.types.forEach((type) => {
                typesArray.push(type.name)
            });
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

            const descData = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemonData.name);
            const pokemonSpecies = await descData.json();
            const description = pokemonSpecies.flavor_text_entries[0].flavor_text;


            pokemons.push({
                id: pokemonData.id,
                img: pokemonData.sprites.front_default,
                name: pokemonData.name,
                types: typesArray,
                description,
                stats
            });
        }
    }
    catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }

    return pokemons;
}

export default fetchPokemons;