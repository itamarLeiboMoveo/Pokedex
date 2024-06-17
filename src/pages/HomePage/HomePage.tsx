import React from 'react';
import PokeTable from "./components/PokeTable/PokeTable.tsx";
import NavBar from '../../components/NavBar/NavBar.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import { usePokemonContext } from "../../context/PokemonContext.tsx";
import "./HomePage.scss";


function HomePage() {
    const { pokeArr, filteredPokemons, loading, loadingMore, handleLoadMore, setFilteredPokemons } = usePokemonContext();

    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavBar />
            <SearchBar pokeArr={pokeArr} setFilteredPokemons={setFilteredPokemons} />
            <PokeTable pokeArr={filteredPokemons} onLoadMore={handleLoadMore} loadingMore={loadingMore} />
        </>

    );
}

export default HomePage;