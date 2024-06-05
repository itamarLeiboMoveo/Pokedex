import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PokeCard from '../HomePage/components/PokeCard/PokeCard.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import './InternalPage.scss';

function InternalPage() {
    const location = useLocation();
    return (
        <div>
            <NavBar />
            {/* <button className='home'> ← Home Page</button> */}
            <div className='link-div'><Link to="/" className={"home"} >← Home Page</Link></div>
            <PokeCard props={location.state} isInternal={true} />
        </div>
    );
}

export default InternalPage;