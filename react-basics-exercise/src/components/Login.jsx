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
    alert(`Logged in as: ${formData.username}`);
  };

  return (
    <div className="login-form">
      <h3>Login Component</h3>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </div>
      <div className="form-display">
        <p><strong>Current Username:</strong> {formData.username}</p>
        <p><strong>Current Password:</strong> {formData.password ? '•'.repeat(formData.password.length) : ''}</p>
      </div>
    </div>
  );
};

export default Login;