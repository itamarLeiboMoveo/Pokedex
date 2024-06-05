import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchPokemons, { getPokemonsDict, getPokemonsList } from '../../../../services/FetchService.tsx';
import './SearchBar.scss';

function SearchBar({ setFilteredPokemons }) {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [pokeName, setPokeName] = useState('');
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
                const filtered = pokeArr.filter(poke => poke.name.toLowerCase().includes(pokeName.toLowerCase()));
                setFilteredPokemons(filtered);
            }
        };
        filterPokemons();
    }, [pokeName, pokeArr, setFilteredPokemons]);

    function handleSubmit(event) {
        event.preventDefault();

        const matchedPoke = pokeArr.find((poke) => poke.name === pokeName);
        if (matchedPoke) {
            navigate('/internal-page', { state: matchedPoke });
        } else {
            console.log('No match found');
        }
    }

    function handleInput(event) {
        setPokeName(event.target.value);

    }

    return (
        <div >
            <form className='search-container' onSubmit={handleSubmit}>
                <input value={pokeName} type='text' onChange={handleInput} />
                {/* <div class="dropdown-content">
                    <button >Link 1</button>
                </div> */}
                <button >Search</button>
            </form>
        </div>
    );
}

export default SearchBar;