// src/pages/ChildMode.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ChildMode() {
  const [storyPrompt, setStoryPrompt] = useState('');

  const handlePromptChange = (e) => {
    setStoryPrompt(e.target.value);
  };

  return (
    <div className="child-mode-body">
      <div className="content">
        <h1 className="child-mode-header">Child Mode</h1>
        <p className="child-mode-prompt">Let's write a story about...</p>
        <input
          type="text"
          placeholder="Finish the prompt"
          value={storyPrompt}
          onChange={handlePromptChange}
          className="prompt-input"
        />
        <div className="button-group">
          <Link to="/mainhub" className="button">
            Go to Main Hub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChildMode;
