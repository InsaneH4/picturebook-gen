// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css';


const Home: React.FC = () => {
  return (
    <body>
      <div className="content">
        <h1>Welcome to our Website</h1>
        <p>Discover amazing features and services.</p>
        <Link to="/signup" className="button">Sign Up</Link>
      </div>
    </body>
  );
};

export default Home;
