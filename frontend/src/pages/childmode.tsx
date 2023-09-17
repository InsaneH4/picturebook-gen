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
        <h1>
          Child Mode
          <hr/>
        </h1>
        <div className="child-mode-prompt">
          <h4>Let's write a story about...</h4>
          Here's where we can describe your character. What do they look like? How do they behave?
          <br/>
          <br/>
        <input className="prompt-input"
          type="text"
          placeholder="Amanda the fearsome dragon"
          value={storyPrompt}
          onChange={handlePromptChange}/>
        </div>
        <div className="button-group">
          <Link to="/mainhub" className="button">
            Go back
          </Link>
          <Link to="/mainhub" className="button">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChildMode;
