import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import fetchPokemons from "../services/FetchService.tsx"

interface PokemonContextType {
    pokeArr: pokemon[];
    OGPokeTable: pokemon[];
    loading: boolean;
    loadingMore: boolean;
    offset: number;
    handleLoadMore: () => void;
    setPokeArr: React.Dispatch<React.SetStateAction<pokemon[]>>;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

const PokemonProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [pokeArr, setPokeArr] = useState<pokemon[]>([]);
    const [OGPokeTable, setOGPokeTable] = useState<pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(20);

    useEffect(() => {
        async function getPokemons() {
            const data = await fetchPokemons({ offset: 0 });
            setPokeArr(data);
            setOGPokeTable(data);
            setLoading(false);
        }
        getPokemons();
    }, [setPokeArr]);

    const handleLoadMore = useCallback(async () => {
        if (offset > 1300) return;
        setLoadingMore(true);
        const newPokemons = await fetchPokemons({ offset });
        setPokeArr(prevPokeArr => [...prevPokeArr, ...newPokemons]);
        setOffset((prevOff) => prevOff + 20);
        setOGPokeTable(prevPokeArr => [...prevPokeArr, ...newPokemons]);
        setLoadingMore(false);
    }, [offset]);

    return (
        <PokemonContext.Provider value={{ pokeArr, OGPokeTable, loading, loadingMore, offset, handleLoadMore, setPokeArr }}>
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
