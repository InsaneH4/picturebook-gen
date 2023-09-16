// src/pages/Home.tsx

import React from 'react';
import './Home.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Picturebook Lite</h1>
      </header>
      <main>
        <p>
          This is the content of our home page. Feel free to customize it to
          fit your needs.
        </p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Picturebook Lite</p>
      </footer>
    </div>
  );
};

export default HomePage;
