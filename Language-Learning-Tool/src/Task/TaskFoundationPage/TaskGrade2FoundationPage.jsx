import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

const sessions = [
  'Session 1: Listening Skill-Conversation Between Mother and Child',
  'Session 2: Speaking Skill-Talking about ones Family',
  'Session 3: Reading Skill-Charlie Bakes a Cake',
  'Session 4: Grammar-Naming Words',
  'Session 5: Grammar-Little Words',
  'Session 6: Writing Skill-In the Garden',
  'Session 7: Listening Skill-Life Stages of a Butterfly',
  'Session 8: Speaking Skill-Seasons',
  'Session 9: Reading Skill-Charlie Decides to Paint',
  'Session 10: Grammar-Doing Words',
  'Session 11: Grammar-Pronouns',
  'Session 12: Writing Skill-Music Class',
  'Session 13: Listening Skill-Conversation with a Neighbour',
  'Session 14: Speaking Skill-Asking Questions',
  'Session 15: Reading Skill-Conversation',
  'Session 16: Grammar-Describing Words',
  'Session 17: Grammar-Position Words',
  'Session 18: Grammar-Present Tense',
  'Session 19: Writing Skill-Supermarket',
  'Session 20: Listening Skill-Our Mother Earth',
  'Session 21: Speaking Skill-Talking about Favourites',
  'Session 22: Reading Skill-Charlie and Riya go to School',
  'Session 23: Grammar-Past Tense',
  'Session 24: Grammar-Future Tense',
  'Session 25: Grammar-Joining Words'
];

const TaskGrade2FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Listening Skill-Conversation Between Mother and Child':
        navigate('/Grade2/grade2session1');
        break;
      case 'Session 2: Speaking Skill-Talking about ones Family':
        navigate('/Grade2/grade2session2');
        break;
      case 'Session 3: Reading Skill-Charlie Bakes a Cake':
        navigate('/Grade2/grade2session3');
        break;
      case 'Session 4: Grammar-Naming Words':
        navigate('/Grade2/grade2session4');
        break;
      case 'Session 5: Grammar-Little Words':
        navigate('/Grade2/grade2session5');
        break;
      case 'Session 6: Writing Skill-In the Garden':
        navigate('/Grade2/grade2session6');
        break;
      case 'Session 7: Listening Skill-Life Stages of a Butterfly':
        navigate('/Grade2/grade2session7');
        break;
      case 'Session 8: Speaking Skill-Seasons':
        navigate('/Grade2/grade2session8');
        break;
      case 'Session 9: Reading Skill-Charlie Decides to Paint':
        navigate('/Grade2/grade2session9');
        break;
      case 'Session 10: Grammar-Doing Words':
        navigate('/Grade2/grade2session10');
        break;
      case 'Session 11: Grammar-Pronouns':
        navigate('/Grade2/grade2session11');
        break;
      case 'Session 12: Writing Skill-Music Class':
        navigate('/Grade2/grade2session12');
        break;
      case 'Session 13: Listening Skill-Conversation with a Neighbour':
        navigate('/Grade2/grade2session13');
        break;
      case 'Session 14: Speaking Skill-Asking Questions':
        navigate('/Grade2/grade2session14');
        break;
      case 'Session 15: Reading Skill-Conversation':
        navigate('/Grade2/grade2session15');
        break;
      case 'Session 16: Grammar-Describing Words':
        navigate('/Grade2/grade2session16');
        break;
      case 'Session 17: Grammar-Position Words':
        navigate('/Grade2/grade2session17');
        break;
      case 'Session 18: Grammar-Present Tense':
        navigate('/Grade2/grade2session18');
        break;
      case 'Session 19: Writing Skill-Supermarket':
        navigate('/Grade1/grade2session19');
        break;
      case 'Session 20: Listening Skill-Our Mother Earth':
        navigate('/Grade2/grade2session20');
        break;
      case 'Session 21: Speaking Skill-Talking about Favourites':
        navigate('/Grade2/grade2session21');
        break;
      case 'Session 22: Reading Skill-Charlie and Riya go to School':
        navigate('/Grade2/grade2session22');
        break;
      case 'Session 23: Grammar-Past Tense':
        navigate('/Grade2/grade2session23');
        break;
      case 'Session 24: Grammar-Future Tense':
        navigate('/Grade2/grade2session24');
        break;
      case 'Session 25: Grammar-Joining Words':
        navigate('/Grade2/grade2session25');
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>Grade 2 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 13).map((session, index) => (
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
          {sessions.slice(13).map((session, index) => (
            <div
              key={index + 13} // Ensure unique key for each item
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

export default TaskGrade2FoundationPage;

