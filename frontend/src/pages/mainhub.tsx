// src/pages/MainHub.jsx
import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const MainHub = () => {
  const [isChildMode, setIsChildMode] = useState(false);
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Complete homework', completed: false },
    { id: 2, description: 'Read a book', completed: true },
    // Add more tasks as needed
  ]);

  let imgUrls: string[] = [];

  // Load user data and update the score
  useEffect(() => {
    // Fetch user data from storage or an API (replace with actual data retrieval)
    const userData = {
      score: 100, // Example score
      tasks: [
        { id: 1, description: 'Learn a new skill', completed: false },
        { id: 2, description: 'Exercise for 30 minutes', completed: true },
        // Add more tasks as needed
      ],
    };

    // Update the score and tasks based on user data
    setScore(userData.score);
    setTasks(userData.tasks);
  }, []);

  // State for the user's input
  const [userInput, setUserInput] = useState('');

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePromptSubmit = () => {
    // Handle the submission of userInput here (e.g., send it to a server or perform an action)
    console.log("User input submitted:");
    let imgArr: string[] = [];
    const response = await fetch(`http://localhost:5000/imagegen/${userInput}`);
    await response.json().then((data) => {
      imgArr = data["images"];
    });
    //console.log(imgArr);
    imgUrls = imgArr;
    return imgArr;
  };

  return (
    <div>
      <h1>Main Hub</h1>

      <div className="task-bar">
        <h2>Task Bar</h2>
        {/* Add your task bar content here */}
      </div>

      <div className="score-counter">
        <h2>Score: {score}</h2>
      </div>

      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Input field for user prompt */}
      <div className="prompt-form">
        <h2>Submit a Prompt</h2>
        <input
          type="text"
          placeholder="Enter your prompt"
          value={userInput}
          onChange={handleUserInputChange}
        />
        <button
          className="button"
          onClick={async () => {
            await handlePromptSubmit();
            console.log(imgUrls);
          }}
        >
          Submit
        </button>
        <img
          id="aiImage"
          width={250}
          height={250}
          src="https://pbxt.replicate.delivery/JtLeyaICNcT5LK0BNbBB0Jxu5M26HcsTnenxpCePHWTjvtJjA/out-0.png"
        />
      </div>
    </div>
  );
};

export default MainHub;
