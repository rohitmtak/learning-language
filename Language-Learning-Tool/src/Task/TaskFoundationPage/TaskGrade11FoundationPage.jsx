import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  ' Level 1',
  ' Level 2',
  ' Level 3',
  ' Level 4',
  ' Level 5',
  ' Level 6',
  ' Level 7',
  ' Level 8',
];

const TaskGrade11FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = () => {
    navigate('/taskgrade'); // Redirect to the GradePage2 page
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>Grade 11 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => ( // Updated to split into two even columns
            <div
              key={index}
              className="session-item"
              onClick={handleSessionClick} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(18).map((session, index) => (
            <div
              key={index + 18} // Ensure unique key for each item
              className="session-item"
              onClick={handleSessionClick} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade11FoundationPage;
