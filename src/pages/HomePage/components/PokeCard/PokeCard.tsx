import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PokeCard.scss";
import "../../../../services/StatsDisplay.tsx"
import StatsDisplay from '../../../../services/StatsDisplay.tsx';

function PokeCard({ props, isInternal }) {
    const navigate = useNavigate();
    function handleClicked() {
        navigate('internal-page', { state: props })
    }
    return (
        <>
            <div className='regular-card' onClick={handleClicked}>
                <h2 className='id'>#{props.id}</h2>
                <img className='img' src={props.img} alt={props.name} />
                <h1 className='name'>{props.name}</h1>
            </div>

            {isInternal && (
                <>
                    {props.types.map((type, index) => (
                        <div className='type' key={index}>{type}</div>
                    ))}
                    <h1 className='decription'>Description</h1>
                    <p>{props.description}</p>
                    <StatsDisplay stats={props.stats} />
                </>
            )}
        </>
    );
}

export default PokeCard;