import "./estatísticas.css"

// src/Statistics.js
import React from 'react';

const Statistics = () => {
  return (
    <div className="statistics-container">
      <h2>Estatísticas</h2>
      <div className="stats-item">
        <div className="stat">
          <div className="stat-label">Usuários Registrados</div>
          <div className="stat-value">1000</div>
        </div>
        <div className="stat">
          <div className="stat-label">Posts Publicados</div>
          <div className="stat-value">500</div>
        </div>
        <div className="stat">
          <div className="stat-label">Comentários</div>
          <div className="stat-value">1200</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
