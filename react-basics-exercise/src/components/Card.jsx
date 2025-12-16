import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <hr />
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Card;