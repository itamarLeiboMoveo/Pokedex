export function filter(pokeName: string, selectedType: string, pokeArr: pokemon[], OGPokeTable: pokemon[]): pokemon[] {
    if (selectedType === '') {
        if (pokeName === '') {
            return OGPokeTable;
        }
        else { //type not selected, name in the input
            const filteredPrefix = pokeArr.filter(poke => poke.name.toLowerCase().startsWith(pokeName.toLowerCase()));
            const filtered = filteredPrefix.concat(pokeArr.filter(poke =>
                poke.name.toLowerCase().includes(pokeName.toLowerCase()) &&
                !filteredPrefix.includes(poke)));

            return filtered;
        }
    }
    else {
        if (pokeName === '') { //type selected, name not in the input
            const filteredArr = OGPokeTable.filter(poke => poke.types.includes(selectedType));
            return filteredArr;
        }
        else{ //both selected
            const filteredArr = pokeArr.filter(poke => poke.types.includes(selectedType));
            if(filteredArr.length === 0) return filteredArr;
            const filteredPrefix = filteredArr.filter(poke => poke.name.toLowerCase().startsWith(pokeName.toLowerCase()));
            const filtered = filteredPrefix.concat(filteredArr.filter(poke =>
                poke.name.toLowerCase().includes(pokeName.toLowerCase()) &&
                !filteredPrefix.includes(poke)));

            return filtered;
        }
    }
}
