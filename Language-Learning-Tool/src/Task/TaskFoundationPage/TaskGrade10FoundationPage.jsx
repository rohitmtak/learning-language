import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

// Correctly formatted sessions list based on the provided data
const sessions = [
  "Session 1: Thought Groups",
  "Session 2: Listening - Speech (Benefits of Gardening)",
  "Session 3: Figures of Speech",
  "Session 4: Reading Skills (Newspaper Not Delivered)",
  "Session 5: Analysis of Sentences",
  "Session 6: Synthesis of Sentences",
  "Session 7: Figures of Speech",
  "Session 8: Speaking Skills (Health - A)",
  "Session 9: Speaking Skills (Health - B)",
  "Session 10: Speaking Skills (Health - C)",
  "Session 11: Transformation of Sentences",
  "Session 12: Narrative Writing",
  "Session 13: Figures of Speech",
  "Session 14: Formal Letter Writing",
  "Session 15: Reading Skills (Jonita's House)",
  "Session 16: Listening - Advertisement (College for Hotel Management)",
  "Session 17: Report Writing",
  "Session 18: Reading Skills (Heera)",
  "Session 19: Figures of Speech",
  "Session 20: Listening - Conversation (Twin brothers Talking)",
  "Session 21: Informal Letter Writing",
  "Session 22: Speaking Skills (My Love for Travelling - A)",
  "Session 23: Speaking Skills (My Love for Travelling - B)",
  "Session 24: Speaking Skills (My Love for Travelling - C)",
  "Session 25: E-mail Writing",
  "Session 26: Etymology",
  "Session 27: Analytical Paragraph Writing - A",
  "Session 28: Analytical Paragraph Writing - B",
  "Session 29: Listening - Narrative (Education)",
  "Session 30: Speech Writing",
  "Session 31: Analogy",
  "Session 32: Listening - News Article",
  "Session 33: Listening - Advertisement (Animal Testing)",
  "Session 34: Book Review"
];

const TaskGrade10FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = () => {
    navigate('/taskgrade'); // Redirect to the GradePage2 page
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>Grade 10 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => ( // Split into two even columns
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

export default TaskGrade10FoundationPage;
