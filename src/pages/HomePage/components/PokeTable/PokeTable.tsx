import React, { useState, useEffect, useRef } from 'react';
import PokeCard from "../PokeCard/PokeCard.tsx";
import "../../../../services/pokemonTypes.tsx";
import "./PokeTable.scss"
import { usePokemonContext } from '../../../../context/PokemonContext.tsx';

function PokeTable() {
    const { pokeArr, handleLoadMore, loadingMore } = usePokemonContext();
    const [clickedLoadMore, setClickedLoadMore] = useState(false);
    const loadMoreRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (pokeArr.length > 20 && loadMoreRef.current && clickedLoadMore) {
            loadMoreRef.current.scrollIntoView({ behavior: 'smooth' });
            setClickedLoadMore(false);
        }
    }, [pokeArr, clickedLoadMore]);

    const handleClickLoadMore = () => {
        handleLoadMore();
        setClickedLoadMore(true);
    };


    return (
        <div className='poke-table-container'>
            <ul>
                {pokeArr.map((poke) => (
                    <PokeCard key={poke.id} props={poke} isInternal={false} />
                ))}
            </ul>
            <div className='load-div'>
                <button className="load_more" ref={loadMoreRef} onClick={handleClickLoadMore}>Load more...</button>
                {loadingMore && (<div className="spinner">
                    <span className="spinner-inner-1"></span>
                    <span className="spinner-inner-2"></span>
                    <span className="spinner-inner-3"></span>
                </div>)}
            </div>
        </div>
    );

}

export default PokeTable;