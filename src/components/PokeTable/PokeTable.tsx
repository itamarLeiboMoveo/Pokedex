import React, { useState, useEffect } from 'react';
import PokeCard from "../PokeCard/PokeCard.tsx";

function PokeTable() {
    const [pokeData, setPokeData] = useState({
        id: '',
        img: '',
        name: ''
    });

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data = await response.json();
            const firstPokemon = data.results[0]; // Accessing the first pokemon in the list
            const response2 = await fetch(firstPokemon.url);
            const data2 = await response2.json();
            setPokeData({
                id: data2.id,
                img: data2.sprites.front_default,
                name: firstPokemon.name,
            });
        }
        catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }

    }
    return (
        <PokeCard props={pokeData} />
    );
}

export default PokeTable;