import React from 'react';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

const StatsCard = ({ icon, title, value, change }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="stats-card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <h2 className="card-value">{value ?? '...'}</h2>
        <div className={`card-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <FiArrowUpRight /> : <FiArrowDownRight />}
          <span>{change?.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;