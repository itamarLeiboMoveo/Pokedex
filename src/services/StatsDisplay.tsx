import React from 'react';
import './pokemonTypes.tsx';

type StatsProps = {
  stats: stats;
};

function StatsDisplay({ stats }){
  return (
    <div className="stats">
      <h3>stats:</h3>
      <div className="stat">
        <strong>HP:</strong> {stats.hp}
      </div>
      <div className="stat">
        <strong>Attack:</strong> {stats.attack}
      </div>
      <div className="stat">
        <strong>Defense:</strong> {stats.defense}
      </div>
      <div className="stat">
        <strong>Special Attack:</strong> {stats.special_atk}
      </div>
      <div className="stat">
        <strong>Special Defense:</strong> {stats.special_def}
      </div>
      <div className="stat">
        <strong>Speed:</strong> {stats.speed}
      </div>
      <div className="stat">
        <strong>Total:</strong> {stats.total}
      </div>
    </div>
  );
};

export default StatsDisplay;
