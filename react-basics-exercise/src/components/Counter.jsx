import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="rpg-panel">
      <div className="panel-header">
        <h3>⚡ Power Counter</h3>
      </div>
      <div className="counter-display">
        <div className="power-meter">
          <span className="power-label">Power Level:</span>
          <span className="power-value">{count}</span>
        </div>
      </div>
      <div className="button-group">
        <button className="rpg-button primary" onClick={() => setCount(count + 1)}>
          <span>▲ Increase</span>
        </button>
        <button className="rpg-button secondary" onClick={() => setCount(count - 1)}>
          <span>▼ Decrease</span>
        </button>
        <button className="rpg-button danger" onClick={() => setCount(0)}>
          <span>↻ Reset</span>
        </button>
      </div>
    </div>
  );
};


export default Counter;