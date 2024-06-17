import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterPokemons, filterTypes } from '../../../../services/SearchFilter.tsx';
import './SearchBar.scss';
import DropDown from './DropDown.tsx';

function SearchBar({ pokeArr, setFilteredPokemons }) {
    const [pokeName, setPokeName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        filterPokemons(pokeName, pokeArr, setFilteredPokemons);
    }, [pokeName, pokeArr, setFilteredPokemons]);

    useEffect(() => {
        filterTypes(selectedType, pokeArr, setFilteredPokemons);
    }, [selectedType, pokeArr, setFilteredPokemons]);

    function handleSubmit(event) {
        event.preventDefault();

        const matchedPoke = pokeArr.find((poke) => poke.name === pokeName.toLowerCase());
        if (matchedPoke) {
            navigate('/pokemon/' + matchedPoke.id);
        } else {
            if(pokeName.length === 0){
                alert('Enter a PokeName!')
            }
            else{
                alert('No match found!');
            }
        }
    }

    function handleInput(event) {
        setPokeName(event.target.value);
    }


    function handleDropDown(event){
        setSelectedType(event.target.value);
    }

    return (
        <div >
            <form className='search-container' onSubmit={handleSubmit}>
                <input value={pokeName} type='text' onChange={handleInput} />
                <button className='search'>Search</button>
                <DropDown value={selectedType} setDropDown={handleDropDown}/>
            </form>
        </div>
    );
}

export default SearchBar;