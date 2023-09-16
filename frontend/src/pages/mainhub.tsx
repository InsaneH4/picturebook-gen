// src/pages/MainHub.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function MainHub() {
  return (
    <div>
      <h1>Main Hub</h1>
      <p>This is the main hub of your app.</p>
      
      {/* Button to navigate to the child mode page */}
      <Link to="/childmode">
        <button>Go to Child Mode</button>
      </Link>
    </div>
  );
}


export default MainHub;
