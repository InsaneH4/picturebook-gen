import React, { useState } from "react";
import "./styles.css";

const Story = () => {
  const [storyText, setStoryText] = useState("");

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
      setStoryText(data.story_text);
    } else {
      console.error("Failed to generate story");
    }
  };

  return (
    <div className="body">
      <div className="content">
        <h1 className="header">It's storytime mf</h1>
        <p className="text">{storyText}</p>
        <button className="button" onClick={generateStory}>
          Generate story
        </button>
      </div>
    </div>
  );
};

export default Story;

