import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

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

const TaskGrade3FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Meeting People-Greeting People':
        navigate('Grade3/taskgrade3session1');
        break;
      case 'Session 2: Meeting People-Introduction':
        navigate('Grade3/taskgrade3session2');
        break;
      case 'Session 3: Meeting People-Where They Are From':
        navigate('Grade3/taskgrade3session3');
        break;
      case 'Session 4: My Family-Relationships and Family Introduction':
        navigate('Grade3/taskgrade3session4');
        break;
      case 'Session 5: My Family-Tell Us Your Age':
        navigate('Grade3/taskgrade3session5');
        break;
      case 'Session 6: My Family-Professions':
        navigate('Grade3/taskgrade3session6');
        break;
      case 'Session 7: Listening Skills 1':
        navigate('Grade3/taskgrade3session7');
        break;
      case 'Session 8: Speaking Skills 1':
        navigate('Grade3/taskgrade3session8');
        break;
      case 'Session 9: Consolidated Activity 1':
        navigate('Grade3/taskgrade3session9');
        break;
      case 'Session 10: Asking Questions-Questioning':
        navigate('Grade3/taskgrade3session10');
        break;
      case 'Session 11: Asking Questions-Yes or No':
        navigate('Grade3/taskgrade3session11');
        break;
      case 'Session 12: Asking Questions-This or That':
        navigate('Grade3/taskgrade3session12');
        break;
      case 'Session 13: Colours Around You-Colourful Surroundings':
        navigate('Grade3/taskgrade3session13');
        break;
      case 'Session 14: Colours Around You-Gifts on Occasions':
        navigate('Grade3/taskgrade3session14');
        break;
      case 'Session 15: Colours Around You >> Where My Things Are':
        navigate('Grade3/taskgrade3session15');
        break;
      case 'Session 16: Reading Skills 1':
        navigate('Grade3/taskgrade3session16');
        break;
      case 'Session 17: Writing Skills 1':
        navigate('Grade3/taskgrade3session17');
        break;
      case 'Session 18: Consolidated Activity 2':
        navigate('Grade3/grade3session18');
        break;
      case 'Session 19: Holiday Getaways-My Favourite Holiday Spots':
        navigate('Grade3/taskgrade3session19');
        break;
      case 'Session 20: Holiday Getaways-Making Enquiries':
        navigate('Grade3/taskgrade3session20');
        break;
      case 'Session 21: Holiday Getaways-Where You Want to Stay':
        navigate('Grade3/taskgrade3session21');
        break;
      case 'Session 22: Home Sweet Home-Describing a Room':
        navigate('Grade3/taskgrade3session22');
        break;
      case 'Session 23: Home Sweet Home-Things in the House':
        navigate('Grade3/taskgrade3session23');
        break;
      case 'Session 24: Home Sweet Home-Your Phone Number':
        navigate('Grade3/taskgrade3session24');
        break;
      case 'Session 25: Listening Skills 2':
        navigate('Grade3/taskgrade3session25');
        break;
      case 'Session 26: Speaking Skills 2':
        navigate('Grade3/taskgrade3session26');
        break;
      case 'Session 27: Consolidated Activity 3':
        navigate('Grade3/taskgrade3session27');
        break;
      case 'Session 28: Its My Life-What I Do Every Day':
        navigate('Grade3/taskgrade3session28');
        break;
      case 'Session 29: Its My Life-My Habits':
        navigate('Grade3/taskgrade3session29');
        break;
      case 'Session 30: Its My Life-Opposite Pairs':
        navigate('Grade3/taskgrade3session30');
        break;
      case 'Session 31: Food for Thought-Food Items':
        navigate('Grade3/taskgrade3session31');
        break;
      case 'Session 32: Food for Thought-What You Would Like to Drink':
        navigate('Grade3/taskgrade3session32');
        break;
      case 'Session 33: Food for Thought-What You Would Like to Eat':
        navigate('Grade3/taskgrade3session33');
        break;
      case 'Session 34: Reading Skills 2':
        navigate('Grade3/taskgrade3session34');
        break;
      case 'Session 35: Writing Skills 2':
        navigate('Grade3/taskgrade3session35');
        break;
      case 'Session 36: Consolidated Activity 4':
        navigate('Grade3/taskgrade3session36');
        break;
      default:
        break;
    }
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

export default TaskGrade3FoundationPage;
