import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`quest-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="quest-checkbox"
      />
      <span className="quest-text">
        {todo.completed && '✓ '}
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="rpg-button danger small">
        <span>🗑️</span>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;