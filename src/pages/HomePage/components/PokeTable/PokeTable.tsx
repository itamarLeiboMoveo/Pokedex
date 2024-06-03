import React, { useState, useEffect } from 'react';
import PokeCard from "../PokeCard/PokeCard.tsx";
import fetchPokemons from "../../../../services/FetchService.tsx";
import "./PokeTable.scss"

function PokeTable() {
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
            <PokeCard key={poke.id} props={poke} />
          ))}
        </ul>
      );
        
}

export default PokeTable;