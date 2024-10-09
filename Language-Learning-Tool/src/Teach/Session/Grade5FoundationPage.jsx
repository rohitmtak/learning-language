import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Grade1FoundationPage.css';

// Define the sessions array
const sessions = [
  'Session 1: Going Places >> Reaching There',
  'Session 2: Going Places >> Travel Options',
  'Session 3: Going Places >> Show Me the Way',
  'Session 4: Do\'s and Don\'ts >> Obey the Rules',
  'Session 5: Do\'s and Don\'ts >> Permission Granted',
  'Session 6: Do\'s and Don\'ts >> It\'s Compulsory',
  'Session 7: Listening Skills 1',
  'Session 8: Speaking Skills 1',
  'Session 9: Consolidated Activity 1',
  'Session 10: Parts of Body >> Body Parts',
  'Session 11: Parts of Body >> Sports and Action',
  'Session 12: Parts of Body >> Enjoying a Holiday',
  'Session 13: Better Than the Best >> Eating Out',
  'Session 14: Better Than the Best >> Better than the Rest',
  'Session 15: Better Than the Best >> Your Opinion',
  'Session 16: Reading Skills 1',
  'Session 17: Writing Skills 1',
  'Session 18: Consolidated Activity 2',
  'Session 19: A Look into the Future >> If Tomorrow Comes',
  'Session 20: A Look into the Future >> Plan Your Week',
  'Session 21: A Look into the Future >> Sunday Plans',
  'Session 22: How Do You Feel? >> Feelings',
  'Session 23: How Do You Feel? >> Describe Your Feelings',
  'Session 24: Time Gone By >> When It Happened',
  'Session 25: Time Gone By >> Then and Now',
  'Session 26: Listening Skills 2',
  'Session 27: Speaking Skills 2',
  'Session 28: Know Your Planet >> Describe the Area',
  'Session 29: Know Your Planet >> Transportation',
  'Session 30: Know Your Planet >> Describing a Country',
  'Session 31: What Did You Do? >> At the Weekend',
  'Session 32: What Did You Do? >> Something Happened',
  'Session 33: What Did You Do? >> What You Did',
  'Session 34: Reading Skills 2',
  'Session 35: Writing Skills 2',
  'Session 36: Consolidated Activity 4',
];

const Grade5FoundationPage = () => {
  const navigate = useNavigate();

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    // Extract the session number from the session string
    const sessionNumber = session.match(/\d+/)[0]; // Extracts the first number found in the string
    const path = `/grade5session${sessionNumber}`;

    // Navigate to the respective session page
    navigate(path);
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>English | Module3</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session)}
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
              onClick={() => handleSessionClick(session)}
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grade5FoundationPage;
