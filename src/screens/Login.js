


// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../components/authSlice'; // Import the loginSuccess action
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css'; // Import CSS file for styling

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate for redirection

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        // Dispatch the loginSuccess action with user data
        dispatch(loginSuccess({ email: formData.email, username: data.username }));
        setMessage('Login successful'); // Set login success message
        setTimeout(() => {
          navigate('/Home2'); // Navigate to Home2 after 2 seconds
        }, 2000);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  const handleCreateAccountClick = () => {
    navigate('/authRoutes'); // Redirect to the signup screen
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p className="create-account-text">
       or <span onClick={handleCreateAccountClick} className="create-account-link">create an account</span>
      </p>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="login-message">{message}</p>
      
    </div>
  );
}

export default Login;
