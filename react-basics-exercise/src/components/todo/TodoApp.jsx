import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn the Ways of React', completed: false },
    { id: 2, text: 'Build a Legendary Project', completed: false },
    { id: 3, text: 'Master Component Magic', completed: true }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const remainingCount = todos.filter(t => !t.completed).length;

  return (
    <div className="rpg-panel">
      <div className="panel-header">
        <h3>⚔️ Quest Log ⚔️</h3>
      </div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <div className="quest-stats">
        <div className="stat-badge">
          <span className="badge-label">Total</span>
          <span className="badge-value">{todos.length}</span>
        </div>
        <div className="stat-badge success">
          <span className="badge-label">Complete</span>
          <span className="badge-value">{completedCount}</span>
        </div>
        <div className="stat-badge warning">
          <span className="badge-label">Remaining</span>
          <span className="badge-value">{remainingCount}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;