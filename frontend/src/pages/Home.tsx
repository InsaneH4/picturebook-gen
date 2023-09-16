// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="body">
      <div className="content">
        <h1 className="header">Welcome to Our Picturebook</h1>
        <p className="text">
          Welcome to our interactive story creation platform! Children actively shape the story through choices, enhanced by gamification elements like rewards and badges. We prioritize education, aligning story generation with learning objectives. AI-powered guidance ensures positive choices, while parents can monitor their children's storytelling. Plus, we offer visual customization for a truly personalized experience. Join us and unleash creativity in a fun and educational way!
        </p>
        <Link to="/signup" className="button">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
