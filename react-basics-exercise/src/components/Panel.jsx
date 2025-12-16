import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <div className={`scroll-item ${isActive ? 'active' : ''}`}>
      <div className="scroll-header" onClick={onShow}>
        <span>{isActive ? '📖' : '📕'} {title}</span>
        <span className="toggle-icon">{isActive ? '▼' : '▶'}</span>
      </div>
      {isActive && (
        <div className="scroll-body">
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