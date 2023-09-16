// src/pages/Signup.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Signup: React.FC = () => {
  return (
    <div className="body">
      <div className="content">
        <h1 className="header">Sign Up</h1>
        <p className="text">Sign up for our service here.</p>
        <div className="input-group">
          <input type="text" placeholder="Username" className="prompt-input" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" className="prompt-input" />
        </div>
        <br/>
        <Link to="/mainhub" className="button">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Signup;
