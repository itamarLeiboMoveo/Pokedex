import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PokeCard.scss";
import Type from "./Type.tsx";
// import "../../../../services/StatsDisplay.tsx"
import StatsDisplay from '../../../../services/StatsDisplay.tsx';

function PokeCard({ props, isInternal }) {
    const navigate = useNavigate();
    function handleClicked() {
        if (isInternal) return;
        navigate('internal-page', { state: props })
    }
    return (
        <div className={`description-card ${isInternal ? 'internal-card' : 'regular-card'}`} onClick={handleClicked}>
            <div className="main-content">
                <h2 className='id'>#{props.id}</h2>
                <figure>
                    <img className='img' src={props.img} alt={props.name} />
                    <figcaption className='name'>{props.name}</figcaption>
                </figure>
                {isInternal && (
                    <div className='types'>
                        {props.types.map((type, index) => (
                            <Type typeName={type}> {type} </Type>
                        ))}
                    </div>
                )}
            </div>
            <div className='line'></div>

            {isInternal && (                    
                <div className="side-content">
                    <h1 className='description description-title'>Description</h1>
                    <p className='description description-text'>{props.description}</p>
                    <StatsDisplay stats={props.stats} />
                </div>
            )}
        </div>

    );
}

export default PokeCard;