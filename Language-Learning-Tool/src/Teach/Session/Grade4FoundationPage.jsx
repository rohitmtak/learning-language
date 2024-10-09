import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

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

const Grade4FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Making Friends >> Internet Chatting':
        navigate('/grade4session1');
        break;
      case 'Session 2: Making Friends >> What and Where':
        navigate('/grade4session2');
        break;
      case 'Session 3: Making Friends >> My Daily Routine':
        navigate('/grade4session3');
        break;
      case 'Session 4: Buying Things >> Shopping for Shoes':
        navigate('/grade4session4');
        break;
      case 'Session 5: Buying Things >> Window Shopping':
        navigate('/grade4session5');
        break;
      case 'Session 6: Buying Things >> Asking Directions':
        navigate('/grade4session6');
        break;
      case 'Session 7: Listening Skills 1':
        navigate('/grade4session7');
        break;
      case 'Session 8: Speaking Skills 1':
        navigate('/grade4session8');
        break;
      case 'Session 9: Consolidated Activity 1':
        navigate('/grade4session9');
        break;
      case 'Session 10: At the Park >> Fun at the Park':
        navigate('/grade4session10');
        break;
      case 'Session 11: At the Park >> Something Is Happening':
        navigate('/grade4session11');
        break;
      case 'Session 12: At the Park >> What They Are Doing':
        navigate('/grade4session12');
        break;
      case 'Session 13: Home Improvement >> Building a House':
        navigate('/grade4session13');
        break;
      case 'Session 14: Home Improvement >> Tool Box':
        navigate('/grade4session14');
        break;
      case 'Session 15: Home Improvement >> Guess the Quantity':
        navigate('/grade4session15');
        break;
      case 'Session 16: Reading Skills 1':
        navigate('/grade4session16');
        break;
      case 'Session 17: Writing Skills 1':
        navigate('/grade4session17');
        break;
      case 'Session 18: Consolidated Activity 2':
        navigate('/grade4session18');
        break;
      case 'Session 19: The Calendar >> Seasons':
        navigate('/grade4session19');
        break;
      case 'Session 20: The Calendar >> Months and Celebrations':
        navigate('/grade4session20');
        break;
      case 'Session 21: The Calendar >> The Weather':
        navigate('/grade4session21');
        break;
      case 'Session 22: Time Gone By >> Lost on an Island':
        navigate('/grade4session22');
        break;
      case 'Session 23: Time Gone By >> When It Happened':
        navigate('/grade4session23');
        break;
      case 'Session 24: Time Gone By >> Then and Now':
        navigate('/grade4session24');
        break;
      case 'Session 25: Listening Skills 2':
        navigate('/grade4session25');
        break;
      case 'Session 26: Speaking Skills 2':
        navigate('/grade4session26');
        break;
      case 'Session 27: Consolidated Activity 3':
        navigate('/grade4session27');
        break;
      case 'Session 28: Know Your Planet >> Describe the Area':
        navigate('/grade4session28');
        break;
      case 'Session 29: Know Your Planet >> Transportation':
        navigate('/grade4session29');
        break;
      case 'Session 30: Know Your Planet >> Describing a Country':
        navigate('/grade4session30');
        break;
      case 'Session 31: What Did you Do? >> At the Weekend':
        navigate('/grade4session31');
        break;
      case 'Session 32: What Did you Do? >> Something Happened':
        navigate('/grade4session32');
        break;
      case 'Session 33: What You Did':
        navigate('/grade4session33');
        break;
      case 'Session 34: Reading Skills 2':
        navigate('/grade4session34');
        break;
      case 'Session 35: Writing Skills 2':
        navigate('/grade4session35');
        break;
      case 'Session 36: Consolidated Activity 4':
        navigate('/grade4session36');
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

export default Grade4FoundationPage;
