import React, { useState, useEffect } from "react";
import "./styles.css";

const Story = () => {
  //get topic and character info from backend
  let storyText = {
    story_text: " ",
  };
  let text = " ";
  let storyStrArr = [];
  const generateStory = async () => {
    const response = await fetch("http://127.0.0.1:5000/story_text/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "pls work",
    });
    await response.json().then((data) => (storyText = data));
    return storyText;
  };
  return (
    <div className="body">
      <div className="content">
        <h1 className="header">It's storytime mf</h1>
        <p className="text">Hello world</p>
        <button
          className="button"
          onClick={async () => {
            storyText = await generateStory();            
            text = storyText.story_text;
            console.log(text);
            storyStrArr = text.split("\n");
            console.log(storyStrArr);
          }}
        >
          Generate story
        </button>
      </div>
    </div>
  );
};

export default Story;
  