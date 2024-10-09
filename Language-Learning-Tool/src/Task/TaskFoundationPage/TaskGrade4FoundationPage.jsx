import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Making Friends >> Internet Chatting',
  'Session 2: Making Friends >> What and Where',
  'Session 3: Making Friends >> My Daily Routine',
  'Session 4: Buying Things >> Shopping for Shoes',
  'Session 5: Buying Things >> Window Shopping',
  'Session 6: Buying Things >> Asking Directions',
  'Session 7: Listening Skills 1',
  'Session 8: Speaking Skills 1',
  'Session 9: Consolidated Activity 1',
  'Session 10: At the Park >> Fun at the Park',
  'Session 11: At the Park >> Something Is Happening',
  'Session 12: At the Park >> What They Are Doing',
  'Session 13: Home Improvement >> Building a House',
  'Session 14: Home Improvement >> Tool Box',
  'Session 15: Home Improvement >> Guess the Quantity',
  'Session 16: Reading Skills 1',
  'Session 17: Writing Skills 1',
  'Session 18: Consolidated Activity 2',
  'Session 19: The Calendar >> Seasons',
  'Session 20: The Calendar >> Months and Celebrations',
  'Session 21: The Calendar >> The Weather',
  'Session 22: Time Gone By >> Lost on an Island',
  'Session 23: Time Gone By >> When It Happened',
  'Session 24: Time Gone By >> Then and Now',
  'Session 25: Listening Skills 2',
  'Session 26: Speaking Skills 2',
  'Session 27: Consolidated Activity 3',
  'Session 28: Know Your Planet >> Describe the Area',
  'Session 29: Know Your Planet >> Transportation',
  'Session 30: Know Your Planet >> Describing a Country',
  'Session 31: What Did you Do? >> At the Weekend',
  'Session 32: What Did you Do? >> Something Happened',
  'Session 33: What You Did',
  'Session 34: Reading Skills 2',
  'Session 35: Writing Skills 2',
  'Session 36: Consolidated Activity 4'
];

const TaskGrade4FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Making Friends >> Internet Chatting':
        navigate('Grade4/taskgrade4session1');
        break;
      case 'Session 2: Making Friends >> What and Where':
        navigate('Grade4/taskgrade4session2');
        break;
      case 'Session 3: Making Friends >> My Daily Routine':
        navigate('Grade4/taskgrade4session3');
        break;
      case 'Session 4: Buying Things >> Shopping for Shoes':
        navigate('Grade4/taskgrade4session4');
        break;
      case 'Session 5: Buying Things >> Window Shopping':
        navigate('Grade4/taskgrade4session5');
        break;
      case 'Session 6: Buying Things >> Asking Directions':
        navigate('Grade4/taskgrade4session6');
        break;
      case 'Session 7: Listening Skills 1':
        navigate('Grade4/taskgrade4session7');
        break;
      case 'Session 8: Speaking Skills 1':
        navigate('Grade4/taskgrade4session8');
        break;
      case 'Session 9: Consolidated Activity 1':
        navigate('Grade4/taskgrade4session9');
        break;
      case 'Session 10: At the Park >> Fun at the Park':
        navigate('Grade4/taskgrade4session10');
        break;
      case 'Session 11: At the Park >> Something Is Happening':
        navigate('Grade4/taskgrade4session11');
        break;
      case 'Session 12: At the Park >> What They Are Doing':
        navigate('Grade4/taskgrade4session12');
        break;
      case 'Session 13: Home Improvement >> Building a House':
        navigate('Grade4/taskgrade4session13');
        break;
      case 'Session 14: Home Improvement >> Tool Box':
        navigate('Grade4/taskgrade4session14');
        break;
      case 'Session 15: Home Improvement >> Guess the Quantity':
        navigate('Grade4/taskgrade4session15');
        break;
      case 'Session 16: Reading Skills 1':
        navigate('Grade4/taskgrade4session16');
        break;
      case 'Session 17: Writing Skills 1':
        navigate('Grade4/taskgrade4session17');
        break;
      case 'Session 18: Consolidated Activity 2':
        navigate('Grade4/taskgrade4session18');
        break;
      case 'Session 19: The Calendar >> Seasons':
        navigate('Grade4/taskgrade4session19');
        break;
      case 'Session 20: The Calendar >> Months and Celebrations':
        navigate('Grade4/taskgrade4session20');
        break;
      case 'Session 21: The Calendar >> The Weather':
        navigate('Grade4/taskgrade4session21');
        break;
      case 'Session 22: Time Gone By >> Lost on an Island':
        navigate('Grade4/taskgrade4session22');
        break;
      case 'Session 23: Time Gone By >> When It Happened':
        navigate('Grade4/taskgrade4session23');
        break;
      case 'Session 24: Time Gone By >> Then and Now':
        navigate('Grade4/taskgrade4session24');
        break;
      case 'Session 25: Listening Skills 2':
        navigate('Grade4/taskgrade4session25');
        break;
      case 'Session 26: Speaking Skills 2':
        navigate('Grade4/taskgrade4session26');
        break;
      case 'Session 27: Consolidated Activity 3':
        navigate('Grade4/taskgrade4session27');
        break;
      case 'Session 28: Know Your Planet >> Describe the Area':
        navigate('Grade4/taskgrade4session28');
        break;
      case 'Session 29: Know Your Planet >> Transportation':
        navigate('Grade4/taskgrade4session29');
        break;
      case 'Session 30: Know Your Planet >> Describing a Country':
        navigate('Grade4/taskgrade4session30');
        break;
      case 'Session 31: What Did you Do? >> At the Weekend':
        navigate('Grade4/taskgrade4session31');
        break;
      case 'Session 32: What Did you Do? >> Something Happened':
        navigate('Grade4/taskgrade4session32');
        break;
      case 'Session 33: What You Did':
        navigate('Grade4/taskgrade4session33');
        break;
      case 'Session 34: Reading Skills 2':
        navigate('Grade4/taskgrade4session34');
        break;
      case 'Session 35: Writing Skills 2':
        navigate('Grade4/taskgrade4session35');
        break;
      case 'Session 36: Consolidated Activity 4':
        navigate('Grade4/taskgrade4session36');
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>English | Module2</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session)} // Pass the session to the handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(18).map((session, index) => (
            <div
              key={index + 18}
              className="session-item"
              onClick={() => handleSessionClick(session)} // Pass the session to the handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade4FoundationPage;
