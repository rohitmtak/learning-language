import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Kinds of Consonant Sounds',
  'Session 2: Kinds of Consonant Sounds',
  'Session 3: Facts and Opinions',
  'Session 4: Listening - News Article (Asian Athletics Championship)',
  'Session 5: Punctuation - A',
  'Session 6: Applying Skimming and Scanning Skills',
  'Session 7: Story Reading (Rohan)',
  'Session 8: Consolidated Activity',
  'Session 9: Kinds of Consonant Sounds',
  'Session 10: Kinds of Consonant Sounds',
  'Session 11: Listening - Conversation (Making Plans)',
  'Session 12: Silent Reading (Railway Station)',
  'Session 13: Writing Skills (Home Alone)',
  'Session 14: Punctuation - B',
  'Session 15: Consolidated Activity',
  'Session 16: Kinds of Consonant Sounds',
  'Session 17: Listening - Advertisement (Flavours)',
  'Session 18: Story Reading (A Great Sage)',
  'Session 19: Speaking Skills (Festivals and Celebrations - A)',
  'Session 20: Speaking Skills (Festivals and Celebrations - B)',
  'Session 21: Speaking Skills (Festivals and Celebrations - C)',
  'Session 22: Writing Skills (Two Friends)',
  'Session 23: Consolidated Activity',
  'Session 24: Kinds of Vowel Sounds',
  'Session 25: Kinds of Vowel Sounds',
  'Session 26: Short and Long Vowel Sounds',
  'Session 27: Speaking Skills (Social Get Together - A)',
  'Session 28: Speaking Skills (Social Get Together - B)',
  'Session 29: Speaking and Writing Skills (Social Get Together)',
  'Session 30: Listening - Narratives (Ventriloquism)',
  'Session 31: Formal and Informal Letter',
  'Session 32: Consolidated Activity',
  'Session 33: Silent Reading (Brookesia Micra)',
  'Session 34: Listening Skills (Properties of Cinnamon)',
  'Session 35: Order of Words',
  'Session 36: Writing Skills (When my Pet Dog...)', 
  'Session 37: Consolidated Activity',
  'Session 38: Intonation and Modulation'
];

// Mapping sessions to their corresponding routes
const sessionRoutes = {
  'Session 1: Kinds of Consonant Sounds': '/grade7session1',
  'Session 2: Kinds of Consonant Sounds': '/grade7session2',
  'Session 3: Facts and Opinions': '/grade7session3',
  'Session 4: Listening - News Article (Asian Athletics Championship)': '/grade7session4',
  'Session 5: Punctuation - A': '/grade7session5',
  'Session 6: Applying Skimming and Scanning Skills': '/grade7session6',
  'Session 7: Story Reading (Rohan)': '/grade7session7',
  'Session 8: Consolidated Activity': '/grade7session8',
  'Session 9: Kinds of Consonant Sounds': '/grade7session9',
  'Session 10: Kinds of Consonant Sounds': '/grade7session10',
  'Session 11: Listening - Conversation (Making Plans)': '/grade7session11',
  'Session 12: Silent Reading (Railway Station)': '/grade7session12',
  'Session 13: Writing Skills (Home Alone)': '/grade7session13',
  'Session 14: Punctuation - B': '/grade7session14',
  'Session 15: Consolidated Activity': '/grade7session15',
  'Session 16: Kinds of Consonant Sounds': '/grade7session16',
  'Session 17: Listening - Advertisement (Flavours)': '/grade7session17',
  'Session 18: Story Reading (A Great Sage)': '/grade7session18',
  'Session 19: Speaking Skills (Festivals and Celebrations - A)': '/grade7session19',
  'Session 20: Speaking Skills (Festivals and Celebrations - B)': '/grade7session20',
  'Session 21: Speaking Skills (Festivals and Celebrations - C)': '/grade7session21',
  'Session 22: Writing Skills (Two Friends)': '/grade7session22',
  'Session 23: Consolidated Activity': '/grade7session23',
  'Session 24: Kinds of Vowel Sounds': '/grade7session24',
  'Session 25: Kinds of Vowel Sounds': '/grade7session25',
  'Session 26: Short and Long Vowel Sounds': '/grade7session26',
  'Session 27: Speaking Skills (Social Get Together - A)': '/grade7session27',
  'Session 28: Speaking Skills (Social Get Together - B)': '/grade7session28',
  'Session 29: Speaking and Writing Skills (Social Get Together)': '/grade7session29',
  'Session 30: Listening - Narratives (Ventriloquism)': '/grade7session30',
  'Session 31: Formal and Informal Letter': '/grade7session31',
  'Session 32: Consolidated Activity': '/grade7session32',
  'Session 33: Silent Reading (Brookesia Micra)': '/grade7session33',
  'Session 34: Listening Skills (Properties of Cinnamon)': '/grade7session34',
  'Session 35: Order of Words': '/grade7session35',
  'Session 36: Writing Skills (When my Pet Dog...)': '/grade7session36'
};

const Grade7FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    const route = sessionRoutes[session];
    if (route) {
      navigate(route); // Navigate to the corresponding session page
    } else {
      console.error(`No route found for session: ${session}`);
    }
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>English | Module5</h2>
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

export default Grade7FoundationPage;
