import React, { useState, useCallback } from 'react';
import PokeTable from "./components/PokeTable/PokeTable.tsx";
import NavBar from '../../components/NavBar/NavBar.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';

function HomePage() {
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const handleFilteredPokemons = useCallback((filtered) => {
        setFilteredPokemons(filtered);
    }, []);
    return (
        <>
            <NavBar />
            <SearchBar setFilteredPokemons={handleFilteredPokemons} />
            <PokeTable filteredPokemons={filteredPokemons} />
        </>

    );
}

export default HomePage;