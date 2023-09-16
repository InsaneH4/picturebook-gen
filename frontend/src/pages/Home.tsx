// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>Welcome to our Website</h1>
        <p>Discover amazing features and services.</p>
        <Link to="/signup" className="sign-in-button">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;

