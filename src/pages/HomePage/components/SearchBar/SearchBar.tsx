import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchPokemons, { getPokemonsDict, getPokemonsList } from '../../../../services/FetchService.tsx';
import './SearchBar.scss';
import DropDown from './DropDown.tsx';

function SearchBar({ setFilteredPokemons }) {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [pokeName, setPokeName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemons() {
            const data = await fetchPokemons();
            setPokeArr(data);
            setFilteredPokemons(data);
        }
        getPokemons();
    }, [setFilteredPokemons]);

    useEffect(() => {
        const filterPokemons = () => {
            if (pokeName === '') {
                setFilteredPokemons(pokeArr);
            } else {
                const filteredPrefix = pokeArr.filter(poke => poke.name.toLowerCase().startsWith(pokeName.toLowerCase()));
                const filtered = filteredPrefix.concat(pokeArr.filter(poke => 
                    poke.name.toLowerCase().includes(pokeName.toLowerCase()) &&
                    !filteredPrefix.includes(poke)));
                setFilteredPokemons(filtered);
            }
        };
        filterPokemons();
    }, [pokeName, pokeArr, setFilteredPokemons]);

    useEffect(() => {
        const filterTypes = () => {
            if(selectedType === ''){
                setFilteredPokemons(pokeArr);
            }
            else{
                const filtered = pokeArr.filter(poke => poke.types.includes(selectedType));
                setFilteredPokemons(filtered);
            }
        };
        filterTypes();
    }, [selectedType, pokeArr, setFilteredPokemons]);

    function handleSubmit(event) {
        event.preventDefault();

        const matchedPoke = pokeArr.find((poke) => poke.name === pokeName.toLowerCase());
        if (matchedPoke) {
            navigate('/internal-page', { state: matchedPoke });
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
                <button >Search</button>
                <DropDown value={selectedType} setDropDown={handleDropDown}/>
            </form>
        </div>
    );
}

export default SearchBar;