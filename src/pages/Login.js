import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // If login is successful, redirect to /home page
      if (response.status === 200) {
        alert('Login Successful!');
        navigate('/home');  // Redirect to /home after successful login
      }
    } catch (error) {
      // If login fails, display an error message
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
