
export async function getPokemonsList(){
    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const pokemonList = await data.json(); 
        return pokemonList.results;
    }
    catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

export async function getPokemonsDict(){
    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const pokemonList = await data.json();
        const dict = {};
        pokemonList.results.forEach((name, url) => dict[name] = url);
        return dict; //returns a dictionary of names and url's
    }
    catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

export async function getPokemonObj(name){
    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
        const pokemonList = await data.json(); 
        return pokemonList.results;
    }
    catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

async function fetchPokemons() {
    const pokemons: pokemon[] = [];
    try {
        const pokemonList = await getPokemonsList(); 
        for (let i = 0; i < 100; i++) {
            const typesArray: string[] = [];
            const pokemonObj = pokemonList[i];
            const data2 = await fetch(pokemonObj.url);
            const pokemonData = await data2.json();
            pokemonData.types.forEach((type) => {
                // console.log(typesArray);
                typesArray.push(type.type.name);
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