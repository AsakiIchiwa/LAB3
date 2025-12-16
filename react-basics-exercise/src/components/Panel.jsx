import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <div className="accordion-panel">
      <div className="panel-title-bar" onClick={onShow}>
        <h4>{isActive ? '📖' : '📕'} {title}</h4>
        <span className="panel-toggle">{isActive ? '▼' : '▶'}</span>
      </div>
      {isActive && (
        <div className="panel-body">
          {children}
        </div>
      )}
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired
};


export default Panel;