import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <div className="panel">
      <h4>{title}</h4>
      {isActive ? (
        <div className="panel-content">{children}</div>
      ) : (
        <button onClick={onShow}>Show</button>
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