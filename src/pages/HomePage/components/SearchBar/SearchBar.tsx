import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchPokemons, { getPokemonsDict, getPokemonsList } from '../../../../services/FetchService.tsx';
import './SearchBar.scss';

function SearchBar() {
    // const [pokeDictionary, setPokeDictionary] = useState<object>({}); //dict of (key: name, value: url)
    // const [pokeName, setPokeName] = useState("");
    // const navigate = useNavigate();
    // useEffect(() => {
    //     async function getPokemons() {
    //         const data = await getPokemonsDict();
    //         if(data)
    //             setPokeDictionary(data);
    //     }
    //     getPokemons();
    // }, []);
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [pokeName, setPokeName] = useState('');
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemons() {
            const data = await fetchPokemons();
            setPokeArr(data);
            // setLoading(false);
        }
        getPokemons();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        const matchedPoke = pokeArr.find((poke) => poke.name === pokeName);
        if (matchedPoke) {
            navigate('/internal-page', { state: matchedPoke });
        } else {
            console.log(pokeName);
            console.log('No match found');
        }
    }

    function handleInput(event){
        setPokeName(event.target.value);
    }

    return (
        <div >
            <form className='search-container' onSubmit={handleSubmit}>
                <input value={pokeName} type='text' onChange={handleInput} />
                <button >Search</button>
            </form>
        </div>
    );
}

export default SearchBar;