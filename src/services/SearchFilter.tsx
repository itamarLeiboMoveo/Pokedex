import fetchPokemons from './FetchService.tsx';

export async function getPokemons(pokeArr, setPokeArr, setFilteredPokemons) {
    const data = await fetchPokemons(pokeArr.length);
    setPokeArr(data);
    setFilteredPokemons(data);
}

export function filterPokemons(pokeName, pokeArr, setFilteredPokemons) {
    if (pokeName === '') {
        setFilteredPokemons(pokeArr);
    } else {
        const filteredPrefix = pokeArr.filter(poke => poke.name.toLowerCase().startsWith(pokeName.toLowerCase()));
        const filtered = filteredPrefix.concat(pokeArr.filter(poke =>
            poke.name.toLowerCase().includes(pokeName.toLowerCase()) &&
            !filteredPrefix.includes(poke)));
        setFilteredPokemons(filtered);
    }
}

export function filterTypes(selectedType, pokeArr, setFilteredPokemons) {
    if (selectedType === '') {
        setFilteredPokemons(pokeArr);
    } else {
        const filtered = pokeArr.filter(poke => poke.types.includes(selectedType));
        setFilteredPokemons(filtered);
    }
}
