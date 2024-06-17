import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PokeCard from '../HomePage/components/PokeCard/PokeCard.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import { getPokemon } from '../../services/FetchService.tsx';
import '../../services/pokemonTypes.tsx';

import './PokemonPage.scss';

function PokemonPage() {
    const { pokeId } = useParams();
    const [pokemonProps, setPokemonProps] = useState<pokemon>();

    useEffect(() => {
        async function getPokemonProps() {
            const data = await getPokemon(pokeId);
            setPokemonProps(data);
        }
        getPokemonProps();
    }, [pokeId]);

    return (
        <div>
            <NavBar />
            <div className='link-div'><Link to="/" className={"home"} >← Home Page</Link></div>
            {pokemonProps && <PokeCard key={pokeId} props={pokemonProps} isInternal={true} />}
        </div>
    );
}

export default PokemonPage;