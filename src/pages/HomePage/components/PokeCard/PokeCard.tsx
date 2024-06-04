import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PokeCard.scss";
import "../../../../services/StatsDisplay.tsx"
import StatsDisplay from '../../../../services/StatsDisplay.tsx';

function PokeCard({ props, isInternal }) {
    const navigate = useNavigate();
    function handleClicked() {
        if(isInternal) return;
        navigate('internal-page', { state: props })
    }
    return (
<>
    <div className={`description-card ${isInternal ? 'internal-card' : 'regular-card'}`} onClick={handleClicked}>
        <div className="main-content">
            <h2 className='id'>#{props.id}</h2>
            <img className='img' src={props.img} alt={props.name} />
            <h1 className='name'>{props.name}</h1>
        </div>
        
        {isInternal && (
            <div className="side-content">
                {props.types.map((type, index) => (
                    <div className='type' key={index}>{type}</div>
                ))}
                <h1 className='description-title'>Description</h1>
                <p className='description-text'>{props.description}</p>
                <StatsDisplay stats={props.stats} />
            </div>
        )}
    </div>
</>

    );
}

export default PokeCard;