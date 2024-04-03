

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import CSS file for styling

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/authRoutes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Signup successful!');
        navigate('/Home2');
      } else {
        setErrors(data.errors || ['An error occurred']);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      setErrors(['An error occurred']);
    }
  };
  const handleCreateAccountClick = () => {
    navigate('/login'); // Redirect to the signup screen
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <p className="create-account-text">
       or <span onClick={handleCreateAccountClick} className="create-account-link">login to your account</span>
      </p>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.length > 0 && (
        <div className="error-container">
          <h4>Error(s) occurred:</h4>
          <ul className="error-list">
            {errors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Signup;
