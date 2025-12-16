import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert(`🎮 Welcome, ${formData.username}! Your quest begins...`);
  };

  return (
    <div className="rpg-panel">
      <div className="panel-header">
        <h3>🗝️ Guild Login</h3>
      </div>
      <div className="login-content">
        <div className="form-field">
          <label className="field-label">⚔️ Warrior Name:</label>
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
          <label className="field-label">🔐 Secret Code:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password..."
            className="rpg-input"
          />
        </div>
        <button className="rpg-button primary full-width" onClick={handleSubmit}>
          <span>⚔️ Enter the Guild</span>
        </button>
        <div className="status-display">
          <p>Name: <span className="highlight">{formData.username || '---'}</span></p>
          <p>Code: <span className="highlight">{formData.password ? '🔒 '.repeat(formData.password.length) : '---'}</span></p>
        </div>
      </div>
    </div>
  );
};
export default Login;