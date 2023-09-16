// src/pages/MainHub.jsx
import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const MainHub = () => {
  return (
    <div>
      {/* Input field for user prompt */}
      <div className="prompt-form">
        <h2>Learning Topic</h2>
        <input
          type="text"
          placeholder="Learning to share, diversity, "
        />
        <Link to="/childmode" className="button">
          Submit
        </Link>
      </div>
    </div>
  );
};

export default MainHub;
