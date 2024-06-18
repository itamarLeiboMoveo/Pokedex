import fetchPokemons from './FetchService.tsx';

export async function getPokemons(pokeArr, setPokeArr, setFilteredPokemons) {
    const data = await fetchPokemons(pokeArr.length);
    setPokeArr(data);
    setFilteredPokemons(data);
}

export function filterPokemons(pokeName: string, pokeArr: pokemon[], OGPokeTable: pokemon[]): pokemon[] {
    if (pokeName === '') {
        return OGPokeTable;
    } else {
        const filteredPrefix = pokeArr.filter(poke => poke.name.toLowerCase().startsWith(pokeName.toLowerCase()));
        const filtered = filteredPrefix.concat(pokeArr.filter(poke =>
            poke.name.toLowerCase().includes(pokeName.toLowerCase()) &&
            !filteredPrefix.includes(poke)));
            
        return filtered;
    }
}

export function filterTypes(selectedType: string, pokeArr: pokemon[], OGPokeTable: pokemon[]): pokemon[] {
    if (selectedType === '') {
        return OGPokeTable;
    } else {
        const filtered = OGPokeTable.filter(poke => poke.types.includes(selectedType));
        return filtered;
    }
}
