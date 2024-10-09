import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade11FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Level 1',
  'Level 2',
  'Level 3',
  'Level 4',
  'Level 5',
  'Level 6',
  'Level 7',
  'Level 8',
];

const Grade11FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session.trim()) {
      case 'Level 1':
        navigate('/grade11session1');
        break;
      case 'Level 2':
        navigate('/grade11session2');
        break;
      case 'Level 3':
        navigate('/grade11session3');
        break;
      case 'Level 4':
        navigate('/grade11session4');
        break;
      case 'Level 5':
        navigate('/grade11session5');
        break;
      case 'Level 6':
        navigate('/grade11session6');
        break;
      case 'Level 7':
        navigate('/grade11session7');
        break;
      case 'Level 8':
        navigate('/grade11session8');
        break;
      default:
        navigate('/grade2'); // Redirect to the GradePage2 page for other levels
        break;
    }
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>Grammar</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session)} // Add onClick handler
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
              onClick={() => handleSessionClick(session)} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grade11FoundationPage;
