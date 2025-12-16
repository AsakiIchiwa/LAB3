import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new task"
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default TodoForm;