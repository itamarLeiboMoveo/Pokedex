import React from 'react';
import PokeTable from "./components/PokeTable/PokeTable.tsx";
import NavBar from '../../components/NavBar/NavBar.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';

function HomePage() {

    return (
        <>
            <NavBar />
            <SearchBar />
            <PokeTable />
        </>
    );
}

export default HomePage;