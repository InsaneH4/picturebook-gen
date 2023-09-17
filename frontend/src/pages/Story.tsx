import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./styles.css";

const Story = () => {
  const [storyText, setStoryText] = useState("");
  const [storySummary, setStorySummary] = useState("");

  const generateStory = async () => {
    const response = await fetch("http://127.0.0.1:5000/story_gen/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), // Sending an empty JSON object as the body
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setStoryText(data.story_text);
      setStorySummary(data.story_summary);
    } else {
      console.error("Failed to generate story");
    }
  };

  return (
    <body>
      <div className="storybody">
        <div className="content">
          <h1 className="header">This is OurBook</h1>
          <div className="summary-box">
            <p className="summary-text">{storySummary}</p>
        </div>
          <button className="button" onClick={generateStory}>
            Generate story
          </button>
          <Link to="/mainhub" className="button">
          New Story
        </Link>
        </div>
      </div>
        <div className="storycontent-box">
          <p className="text">{storyText}</p>
        </div>
    </body>
  );
};

export default Story;
