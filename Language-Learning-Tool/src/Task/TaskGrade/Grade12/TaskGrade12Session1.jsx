import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../TaskGradePage.css'; // Import the CSS file for styling

// Images
import classroomTeachingImg from '../../../assets/page4Images/Asset 135@4x.png';

const Grade12Session1 = () => {
  const navigate = useNavigate();

  // Function to handle session selection
  const handleSessionChange = (event) => {
    const selectedSession = event.target.value;
    if (selectedSession) {
      navigate(selectedSession); // Navigate to the selected session
    }
  };

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 12 | Foundation | Session 1: Meet the Children</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Classroom Teaching</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <div className="session-dropdown">
                <label htmlFor="sessionSelect">Select a Session:</label>
                <select id="sessionSelect" onChange={handleSessionChange} className="session-select">
                  <option value="">--Select Session--</option>
                  <option value="/session1">Session 1</option>
                  <option value="/session2">Session 2</option>
                  <option value="/session3">Session 3</option>
                  <option value="/session4">Session 4</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade12Session1;
