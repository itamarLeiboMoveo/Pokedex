import React from 'react';

import "./PokeCard.scss";

function PokeCard({ props }) {


    return (
        <div className='card'> 

        
            <h2 className='id'>#{props.id}</h2>
            <img className='img' src={props.img}></img>
            <h1 className='name'>{props.name}</h1>
        </div>
    );
}

export default PokeCard;