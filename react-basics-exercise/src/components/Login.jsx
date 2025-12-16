import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`⚔️ Welcome, ${formData.username}!`);
  };

  return (
    <div className="game-panel">
      <div className="panel-header">
        <h3>🗝️ Guild Portal 🗝️</h3>
      </div>

      <div className="login-form">
        <div className="form-field">
          <label>⚔️ Warrior Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your name..."
            className="rpg-input"
          />
        </div>

        <div className="form-field">
          <label>🔐 Secret Code</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password..."
            className="rpg-input"
          />
        </div>

        <button className="rpg-btn primary full-width" onClick={handleSubmit}>
          <span>Enter Guild</span>
        </button>

        <div className="status-display">
          <p>Name: <span className="highlight">{formData.username || '---'}</span></p>
          <p>Code: <span className="highlight">{formData.password ? '🔒'.repeat(Math.min(formData.password.length, 6)) : '---'}</span></p>
        </div>
      </div>
    </div>
  );
};
export default Login;