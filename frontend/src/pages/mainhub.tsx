// src/pages/MainHub.jsx
import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const MainHub = () => {
  const [userInput, setUserInput] = useState("");

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleTopicSubmit = async () => {
    console.log(userInput + " submitted");
    //get request to send form data to backend
    const response = await fetch("http://127.0.0.1:5000/topic/" + userInput, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "pls work",
    });
    const data = await response.json();
    console.log(data);    
  };

  return (
    <div>
      {/* Input field for user prompt */}
      <div className="content">
        <h1>
          Learning Topic
          <hr />
        </h1>
        Parents, what are you hoping to teach your little one with this story?
        <br />
        <br />
        <div>
          <input
            className="prompt-input"
            type="text"
            placeholder="Learning to share, diversity, "
            onChange={handleUserInputChange}
            value={userInput}
          />
        </div>
        <br />
        <Link
          to="/childmode"
          className="button"
          onClick={async () => {
            await handleTopicSubmit();
          }}
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default MainHub;
