// src/pages/Signup.jsx
import React from 'react';
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="gradient-bg"></div>
      <div className="signup-content">
        <h2>Create an Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
