// src/pages/MainHub.jsx
// after login
import React, { useState, useEffect } from 'react';
import './mainhub.css';


const MainHub = () => {
  const [isChildMode, setIsChildMode] = useState(false);
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Complete homework', completed: false },
    { id: 2, description: 'Read a book', completed: true },
    // Add more tasks as needed
  ]);

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

  const toggleChildMode = () => {
    setIsChildMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <h1>Main Hub</h1>
      <button onClick={toggleChildMode}>
        {isChildMode ? 'Switch to Adult Mode' : 'Switch to Child Mode'}
      </button>

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
    </div>
  );
}


export default MainHub;