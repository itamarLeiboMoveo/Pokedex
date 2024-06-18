import React, { useState, useEffect, useRef } from 'react';
import PokeCard from "../PokeCard/PokeCard.tsx";
import "../../../../services/pokemonTypes.tsx";
import "./PokeTable.scss"
import { usePokemonContext } from '../../../../context/PokemonContext.tsx';

function PokeTable() {
    const { pokeArr, handleLoadMore, loadingMore } = usePokemonContext();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='poke-table-container'>
            <ul>
                {pokeArr.map((poke) => (
                    <li key={poke.id}><PokeCard key={poke.id} props={poke} isInternal={false} /></li>
                ))}
            </ul>
            <div className='load-div'>
                <button className="load_more" onClick={handleLoadMore}>Load more...</button>
                {loadingMore && (<div className="spinner">
                    <span className="spinner-inner-1"></span>
                    <span className="spinner-inner-2"></span>
                    <span className="spinner-inner-3"></span>
                </div>)}
                <button className="scroll-to-top" onClick={scrollToTop}>↑ go to the top</button>
            </div>
        </div>
    );

}

export default PokeTable;