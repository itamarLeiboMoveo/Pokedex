import React, { useState, useEffect } from 'react';
import PokeCard from "../PokeCard/PokeCard.tsx";
import fetchPokemons from "../../../../services/FetchService.tsx";
import "../../../../services/pokemonTypes.tsx";
import "./PokeTable.scss"

function PokeTable() {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getPokemons() {
            const data = await fetchPokemons();
            setPokeArr(data);
            setLoading(false);
        }
        getPokemons();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
          {pokeArr.map((poke) => (
            <PokeCard key={poke.id} props={poke} isInternal={false} />
          ))}
        </ul>
      );
        
}

export default PokeTable;