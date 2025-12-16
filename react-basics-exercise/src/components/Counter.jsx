import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h3>Counter Component</h3>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '0.5rem' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '0.5rem' }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;