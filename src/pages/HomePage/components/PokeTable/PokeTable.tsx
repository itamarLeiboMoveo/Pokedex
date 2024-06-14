import React, { useState, useEffect, useRef } from 'react';
import PokeCard from "../PokeCard/PokeCard.tsx";
import fetchPokemons from "../../../../services/FetchService.tsx";
import "../../../../services/pokemonTypes.tsx";
import "./PokeTable.scss"

function PokeTable({ pokeArr, onLoadMore }) {
    const [offset, setOffset] = useState(20);
    const loadMoreRef = useRef<HTMLButtonElement>(null); 

    useEffect(() => {
        if (pokeArr.length > 20 && loadMoreRef.current) {
            loadMoreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pokeArr]);

    const handleMore = () => {
        onLoadMore();
    }


    return (
        <div className='poke-table-container'>
            <ul>
                {pokeArr.map((poke) => (
                    <PokeCard key={poke.id} props={poke} isInternal={false} />
                ))}
            </ul>
            <button className="load_more" ref={loadMoreRef} onClick={handleMore}>Load more...</button>
        </div>
    );

}

export default PokeTable;