// src/pages/ChildMode.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function ChildMode() {
  const [charPrompt, setCharPrompt] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleCharacterSubmit = async () => {
    console.log(userInput + " submitted");
    //get request to send form data to backend
    const response = await fetch("http://127.0.0.1:5000/mc_info/" + userInput, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userInput,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="child-mode-body">
      <div className="content">
        <h1>
          Child Mode
          <hr />
        </h1>
        <div className="child-mode-prompt">
          <h4>Let's write a story about...</h4>
          Here's where we can describe your character. What do they look like?
          How do they behave?
          <br />
          <br />
          <input
            className="prompt-input"
            type="text"
            placeholder="Amanda the fearsome dragon"
            onChange={handleUserInputChange}
            value={userInput}
          />
        </div>
        <div className="button-group">
          <Link to="/mainhub" className="button">
            Go back
          </Link>
          <Link
            to="/mainhub"
            className="button"
            onClick={async () => {
              await handleCharacterSubmit();
            }}
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChildMode;
