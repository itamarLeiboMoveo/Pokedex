import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPokemons, filterPokemons, filterTypes } from '../../../../services/SearchFilter.tsx';
import './SearchBar.scss';
import DropDown from './DropDown.tsx';

function SearchBar({ setFilteredPokemons }) {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [pokeName, setPokeName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getPokemons(setPokeArr, setFilteredPokemons);
    }, [setFilteredPokemons]);

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
            navigate('/internal-page/' + matchedPoke.id);
        } else {
            console.log('No match found');
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