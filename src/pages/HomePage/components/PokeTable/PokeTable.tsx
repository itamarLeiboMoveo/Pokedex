import React, { useState, useEffect, useRef } from 'react';
import PokeCard from "../PokeCard/PokeCard.tsx";
import fetchPokemons from "../../../../services/FetchService.tsx";
import "../../../../services/pokemonTypes.tsx";
import "./PokeTable.scss"

function PokeTable({ filteredPokemons }) {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(20);
    const loadMoreRef = useRef<HTMLButtonElement>(null); 

    useEffect(() => {
        async function getPokemons() {
            const data = await fetchPokemons( {offset: 0} );
            setPokeArr(data);
            setLoading(false);
        }
        getPokemons();
    }, []);

    useEffect(() => {
        if (filteredPokemons.length > 0) {
            setPokeArr(filteredPokemons);
        }
    }, [filteredPokemons]);

    useEffect(() => {
        if (pokeArr.length > 20 && loadMoreRef.current) {
            loadMoreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pokeArr]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleMore = async () => {
        if(offset > 1300) return;
        setLoading(true);
        const newPokemons = await fetchPokemons({ offset });
        setPokeArr(prevPokeArr => [...prevPokeArr, ...newPokemons]);
        setOffset((prevOff) => prevOff+20);
        
        setLoading(false);
    };


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