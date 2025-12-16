import React, { useState } from 'react';
import Panel from './Panel';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="game-panel">
      <div className="panel-header">
        <h3>📜 Ancient Scrolls 📜</h3>
      </div>
      <Panel title="The Way of React" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        <p>React is the ancient art of building powerful user interfaces through component-based magic.</p>
      </Panel>
      <Panel title="State Mastery" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        <p>State is lifted to ensure only one scroll may be read at a time. This is the way.</p>
      </Panel>
      <Panel title="Props & Components" isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
        <p>Props flow like mana from parent to child, bestowing power to each component.</p>
      </Panel>
    </div>
  );
};



export default Accordion;