import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="quest-card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Card;