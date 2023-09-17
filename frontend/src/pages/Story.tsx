import React, { useState, useEffect } from "react";
import "./styles.css";

const Story = () => {
  //get topic and character info from backend
  let myStory = {
    story_text: " ",
    story_summary: " ",
    image_url: " ",
  };  
  let storyStrArr = [];
  const generateStory = async () => {
    const response = await fetch("http://127.0.0.1:5000/story_gen/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "pls work",
    });
    await response.json().then((data) => (myStory = data));
    return myStory;
  };
  // const generateSummary = async () => {
  //   const response = await fetch("http://127.0.0.1:5000/summarize_story/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: "pls work",
  //   });
  //   await response.json().then((data) => (summaryText = data));
  //   return summaryText;
  // };
  return (
    <div className="body">
      <div className="content">
        <h1 className="header">It's storytime mf</h1>
        <p className="text">Hello world</p>
        <button
          className="button"
          onClick={async () => {
            myStory = await generateStory();
            console.log(myStory);
          }}
        >
          Generate story
        </button>
      </div>
    </div>
  );
};

export default Story;
