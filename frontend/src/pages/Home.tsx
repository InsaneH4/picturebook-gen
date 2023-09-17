// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="body">
      <div className="content">
        <h1 className="header">Welcome to OurBook</h1>
        <p className="text">
        </p>
        <br/>
        <Link to="/mainhub" className="button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
