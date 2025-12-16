import React, { useState } from 'react';
import Panel from './Panel';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      <h3>Accordion Component</h3>
      <Panel
        title="About React"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p>React is a JavaScript library for building user interfaces. It uses a component-based architecture and virtual DOM for efficient rendering.</p>
      </Panel>
      <Panel
        title="State Management"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p>State is lifted up to the Accordion component, ensuring only one panel can be open at a time. This demonstrates the "lifting state up" pattern.</p>
      </Panel>
      <Panel
        title="Props & Components"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <p>Props allow data to flow from parent to child components. The Accordion passes isActive and onShow props to control each Panel.</p>
      </Panel>
    </div>
  );
};

export default Accordion;