// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Our Website</h1>
        <Link to="/Signup" className="sign-up-button">
          Sign Up
        </Link>
      </header>
      <main>
        <p>
          This is the content of our home page. Feel free to customize it to
          fit your needs.
        </p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Website Name</p>
      </footer>
    </div>
  );
};

export default HomePage;

