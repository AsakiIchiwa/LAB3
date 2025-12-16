import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="game-panel">
      <div className="panel-header">
        <h3>⚡ Power Meter ⚡</h3>
      </div>
      
      <div className="counter-display">
        <div className="energy-orb">
          <div className="orb-pulse"></div>
          <div className="orb-core">
            <span className="count-value">{count}</span>
          </div>
        </div>
        <p className="energy-label">ENERGY LEVEL</p>
      </div>

      <div className="button-row">
        <button className="rpg-btn success" onClick={() => setCount(count + 1)}>
          <span>▲ Charge</span>
        </button>
        <button className="rpg-btn info" onClick={() => setCount(count - 1)}>
          <span>▼ Drain</span>
        </button>
        <button className="rpg-btn danger" onClick={() => setCount(0)}>
          <span>↻ Reset</span>
        </button>
      </div>
    </div>
  );
};



export default Counter;