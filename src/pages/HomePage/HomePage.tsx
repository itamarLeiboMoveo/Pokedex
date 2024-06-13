import React, { useState, useEffect, useCallback } from 'react';
import PokeTable from "./components/PokeTable/PokeTable.tsx";
import NavBar from '../../components/NavBar/NavBar.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';

import fetchPokemons from "../../services/FetchService.tsx";


function HomePage() {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [filteredPokemons, setFilteredPokemons] = useState<pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(20);

    useEffect(() => {
        async function getPokemons() {
            const data = await fetchPokemons( {offset: 0} );
            setPokeArr(data);
            setFilteredPokemons(data);
            setLoading(false);
        }
        getPokemons();
    }, []);

    const handleLoadMore = useCallback(async () => {
        if(offset > 1300) return;
            setLoading(true);
        const newPokemons = await fetchPokemons({ offset });
        setPokeArr(prevPokeArr => [...prevPokeArr, ...newPokemons]);
        setFilteredPokemons(prevPokeArr => [...prevPokeArr, ...newPokemons]);
        setOffset((prevOff) => prevOff + 20);
        
        setLoading(false);
    }, [offset]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavBar />
            <SearchBar pokeArr={pokeArr} setFilteredPokemons={setFilteredPokemons}/>
            <PokeTable pokeArr={filteredPokemons} onLoadMore={handleLoadMore} />
        </>

    );
}

export default HomePage;