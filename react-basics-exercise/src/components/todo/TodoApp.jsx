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
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length
  };

  return (
    <div className="game-panel">
      <div className="panel-header">
        <h3>⚔️ Quest Log ⚔️</h3>
      </div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <div className="quest-stats">
        <div className="stat-box total">
          <span className="num">{stats.total}</span>
          <span className="lbl">Total</span>
        </div>
        <div className="stat-box done">
          <span className="num">{stats.completed}</span>
          <span className="lbl">Done</span>
        </div>
        <div className="stat-box active">
          <span className="num">{stats.active}</span>
          <span className="lbl">Active</span>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;