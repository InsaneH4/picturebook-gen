import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const MainHub = () => {
  const [userInput, setUserInput] = useState("");
  const [apiResponse, setApiResponse] = useState(""); // To store API response

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleTopicSubmit = async () => {
    console.log(userInput + " submitted");
    try {
      // Make a POST request to send form data to the backend
      const response = await fetch("http://127.0.0.1:5000/topic/" + userInput, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: "pls work" }), // Send data as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to submit the topic");
      }

      const data = await response.json();
      setApiResponse(data); // Store the API response
    } catch (error) {
      console.error("Error submitting topic:", error);
    }
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

        {/* Display API response */}
        {apiResponse && (
          <div className="api-response">
            API Response: {apiResponse.topic} {/* Adjust this based on your API response structure */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHub;
