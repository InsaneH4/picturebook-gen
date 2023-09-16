// src/pages/Home.tsx
import React from 'react';
import './home.css';

const home: React.FC = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>Welcome to our Website</h1>
        <p>Discover amazing features and services.</p>
        <button className="sign-in-button">Sign In</button>
      </div>
    </div>
  );
};

export default home;


