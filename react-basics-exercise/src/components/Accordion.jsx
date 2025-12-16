import React, { useState } from 'react';
import Panel from './Panel';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="rpg-panel">
      <div className="panel-header">
        <h3>📜 Knowledge Scrolls</h3>
      </div>
      <Panel
        title="The Way of React"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p>React is the ancient art of building powerful user interfaces through component-based magic and the mystical Virtual DOM.</p>
      </Panel>
      <Panel
        title="State Mastery"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p>State is lifted to the Accordion master, ensuring only one scroll may be read at a time. This is the way of the ancients.</p>
      </Panel>
      <Panel
        title="Props & Components"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <p>Props flow like mana from parent to child. The Accordion bestows isActive and onShow powers to each Panel.</p>
      </Panel>
    </div>
  );
};


export default Accordion;