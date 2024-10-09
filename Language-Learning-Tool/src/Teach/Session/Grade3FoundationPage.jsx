import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Meeting People-Greeting People',
  'Session 2: Meeting People-Introduction',
  'Session 3: Meeting People-Where They Are From',
  'Session 4: My Family-Relationships and Family Introduction',
  'Session 5: My Family-Tell Us Your Age',
  'Session 6: My Family-Professions',
  'Session 7: Listening Skills 1',
  'Session 8: Speaking Skills 1',
  'Session 9: Consolidated Activity 1',
  'Session 10: Asking Questions-Questioning',
  'Session 11: Asking Questions-Yes or No',
  'Session 12: Asking Questions-This or That',
  'Session 13: Colours Around You-Colourful Surroundings',
  'Session 14: Colours Around You-Gifts on Occasions',
  'Session 15: Colours Around You >> Where My Things Are',
  'Session 16: Reading Skills 1',
  'Session 17: Writing Skills 1',
  'Session 18: Consolidated Activity 2',
  'Session 19: Holiday Getaways-My Favourite Holiday Spots',
  'Session 20: Holiday Getaways-Making Enquiries',
  'Session 21: Holiday Getaways-Where You Want to Stay',
  'Session 22: Home Sweet Home-Describing a Room',
  'Session 23: Home Sweet Home-Things in the House',
  'Session 24: Home Sweet Home-Your Phone Number',
  'Session 25: Listening Skills 2',
  'Session 26: Speaking Skills 2',
  'Session 27: Consolidated Activity 3',
  'Session 28: Its My Life-What I Do Every Day',
  'Session 29: Its My Life-My Habits',
  'Session 30: Its My Life-Opposite Pairs',
  'Session 31: Food for Thought-Food Items',
  'Session 32: Food for Thought-What You Would Like to Drink',
  'Session 33: Food for Thought-What You Would Like to Eat',
  'Session 34: Reading Skills 2',
  'Session 35: Writing Skills 2',
  'Session 36: Consolidated Activity 4'
];

const Grade3FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    const sessionMap = {
      'Session 1: Meeting People-Greeting People': '/grade3session1',
      'Session 2: Meeting People-Introduction': '/grade3session2',
      'Session 3: Meeting People-Where They Are From': '/grade3session3',
      'Session 4: My Family-Relationships and Family Introduction': '/grade3session4',
      'Session 5: My Family-Tell Us Your Age': '/grade3session5',
      'Session 6: My Family-Professions': '/grade3session6',
      'Session 7: Listening Skills 1': '/grade3session7',
      'Session 8: Speaking Skills 1': '/grade3session8',
      'Session 9: Consolidated Activity 1': '/grade3session9',
      'Session 10: Asking Questions-Questioning': '/grade3session10',
      'Session 11: Asking Questions-Yes or No': '/grade3session11',
      'Session 12: Asking Questions-This or That': '/grade3session12',
      'Session 13: Colours Around You-Colourful Surroundings': '/grade3session13',
      'Session 14: Colours Around You-Gifts on Occasions': '/grade3session14',
      'Session 15: Colours Around You >> Where My Things Are': '/grade3session15',
      'Session 16: Reading Skills 1': '/grade3session16',
      'Session 17: Writing Skills 1': '/grade3session17',
      'Session 18: Consolidated Activity 2': '/grade3session18',
      'Session 19: Holiday Getaways-My Favourite Holiday Spots': '/grade3session19',
      'Session 20: Holiday Getaways-Making Enquiries': '/grade3session20',
      'Session 21: Holiday Getaways-Where You Want to Stay': '/grade3session21',
      'Session 22: Home Sweet Home-Describing a Room': '/grade3session22',
      'Session 23: Home Sweet Home-Things in the House': '/grade3session23',
      'Session 24: Home Sweet Home-Your Phone Number': '/grade3session24',
      'Session 25: Listening Skills 2': '/grade3session25',
      'Session 26: Speaking Skills 2': '/grade3session26',
      'Session 27: Consolidated Activity 3': '/grade3session27',
      'Session 28: Its My Life-What I Do Every Day': '/grade3session28',
      'Session 29: Its My Life-My Habits': '/grade3session29',
      'Session 30: Its My Life-Opposite Pairs': '/grade3session30',
      'Session 31: Food for Thought-Food Items': '/grade3session31',
      'Session 32: Food for Thought-What You Would Like to Drink': '/grade3session32',
      'Session 33: Food for Thought-What You Would Like to Eat': '/grade3session33',
      'Session 34: Reading Skills 2': '/grade3session34',
      'Session 35: Writing Skills 2': '/grade3session35',
      'Session 36: Consolidated Activity 4': '/grade3session36'
    };

    navigate(sessionMap[session]);
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>English | Module 1</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
            <div
              key={index}
              id={`session-item-${index + 1}`} // Adding unique ID for each session item
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
              id={`session-item-${index + 19}`} // Adding unique ID for each session item
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

export default Grade3FoundationPage;
