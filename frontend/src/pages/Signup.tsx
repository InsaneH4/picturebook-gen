// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Sign up for our service here.</p>
      <Link to="/mainhub" className="register-button">
          Register
        </Link>
    </div>
  );
}

export default Signup;