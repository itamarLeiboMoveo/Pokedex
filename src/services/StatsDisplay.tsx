import React from 'react';
import './pokemonTypes.tsx';
import './StatsDisplay.scss';

function StatsDisplay({ stats }) {

  const statNames = [
    { label: 'HP', key: 'hp' },
    { label: 'Attack', key: 'attack' },
    { label: 'Defense', key: 'defense' },
    { label: 'Special Attack', key: 'special_atk' },
    { label: 'Special Defense', key: 'special_def' },
    { label: 'Speed', key: 'speed' },
    { label: 'Total', key: 'total' },
  ];

  return (
    <div>
      <h3>stats</h3>
      <div className="stats">
        {statNames.map((stat) => (
          <div className="stat" key={stat.key}>
            <strong>{stat.label}:</strong> {stats[stat.key]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsDisplay;
