import React, { createContext,useContext , useState, useEffect, ReactNode } from 'react';
import fetchPokemons from "../services/FetchService.tsx";

interface PokemonContextType {
    pokeArr: pokemon[];
    setPokeArr: React.Dispatch<React.SetStateAction<pokemon[]>>;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

const PokemonProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);

    useEffect(() => {
        async function getPokemons() {
            const data = await fetchPokemons({ offset: 0 });
            setPokeArr(data);
        }
        getPokemons();
    }, [setPokeArr]);

    return (
        <PokemonContext.Provider value={{ pokeArr, setPokeArr }}>
            {children}
        </PokemonContext.Provider>
    );
};

const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemonContext must be used within a PokemonProvider');
    }
    return context;
};
export { PokemonProvider, usePokemonContext };
export default PokemonContext;
