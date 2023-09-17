import React, { useState, useEffect } from "react";
import "./styles.css";

const Story = () => {
  const [storyText, setStoryText] = useState(""); // Initialize as an empty string

  const generateStory = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/story_text/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // You may need to send specific data here
      });
      if (response.ok) {
        const data = await response.json();
        // Update the 'storyText' state with the fetched story
        setStoryText(data.story_text);
      } else {
        console.error("Error fetching story:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching story:", error);
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
  