import React from 'react';
import { useLocation } from 'react-router-dom';
import PokeCard from '../HomePage/components/PokeCard/PokeCard.tsx';

function InternalPage(){
    const location = useLocation();
    return <PokeCard props={location.state} isInternal={true}/>;
}

export default InternalPage;