import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling


// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Comparison of Vowel Sounds (Minimal Pairs)',
  'Session 2: Facts and Opinions',
  'Session 3: Listening Skills - News Article (Syria)',
  'Session 4: Syllables and Word Stress',
  'Session 5: Sound Combination and Consonant Clusters',
  'Session 6: Word Stress and Syllable Stress Rules',
  'Session 7: Listening Skills - Conversation (Discussion about Studies)',
  'Session 8: Applying Skimming and Scanning Skills',
  'Session 9: Silent Reading (Krishnadev)',
  'Session 10: Noun-Verb Pronunciation Difference - Introduction',
  'Session 11: Noun-Verb Pronunciation Difference',
  'Session 12: Listening - Narratives (Nutrition)',
  'Session 13: Silent Reading (Prime Minister of Iraq)',
  'Session 14: Pronunciation Rules - Introduction',
  'Session 15: Pronunciation of "ed" at the End of Words',
  'Session 16: Sentence Stress - Introduction',
  'Session 17: The Schwa Sound',
  'Session 18: Punctuation - A',
  'Session 19: Silent Reading (Ram)',
  'Session 20: Order of Words',
  'Session 21: Informal Letter Writing',
  'Session 22: Question Tags - Meaning',
  'Session 23: Speaking Skills (Friends and Friendships - A)',
  'Session 24: Speaking Skills (Friends and Friendships - B)',
  'Session 25: Speaking Skills (Friends and Friendships - C)',
  'Session 26: Writing Skills (Raj Forgot his Tiffin)',
  'Session 27: Formal Letter Writing',
  'Session 28: Punctuation - B',
  'Session 29: Transformation of Sentences - Introduction',
  'Session 30: Writing Skills (Neil\'s Father Gets Exciting News)',
  'Session 31: Speaking Skills (Hobbies and Interests - A)',
  'Session 32: Speaking Skills (Hobbies and Interests - B)',
  'Session 33: Speaking Skills (Hobbies and Interests - C)',
  'Session 34: Paragraph and Blog Writing',
  'Session 35: Common Speech Errors',
  'Session 36: Listening - Speech (Social Networking)',
  'Session 37: E-mail Writing',
  'Session 38: Intonation and Modulation'
];

// Mapping sessions to their corresponding routes
const sessionRoutes = {
  'Session 1: Comparison of Vowel Sounds (Minimal Pairs)': 'Grade8/taskgrade8session1',
  'Session 2: Facts and Opinions': 'Grade8/taskgrade8session2',
  'Session 3: Listening Skills - News Article (Syria)': 'Grade8/taskgrade8session3',
  'Session 4: Syllables and Word Stress': 'Grade8/taskgrade8session4',
  'Session 5: Sound Combination and Consonant Clusters': 'Grade8/taskgrade8session5',
  'Session 6: Word Stress and Syllable Stress Rules': 'Grade8/taskgrade8session6',
  'Session 7: Listening Skills - Conversation (Discussion about Studies)': 'Grade8/taskgrade8session7',
  'Session 8: Applying Skimming and Scanning Skills': 'Grade8/taskgrade8session8',
  'Session 9: Silent Reading (Krishnadev)': 'Grade8/taskgrade8session9',
  'Session 10: Noun-Verb Pronunciation Difference - Introduction': 'Grade8/taskgrade8session10',
  'Session 11: Noun-Verb Pronunciation Difference': 'Grade8/taskgrade8session11',
  'Session 12: Listening - Narratives (Nutrition)': 'Grade8/taskgrade8session12',
  'Session 13: Silent Reading (Prime Minister of Iraq)': 'Grade8/taskgrade8session13',
  'Session 14: Pronunciation Rules - Introduction': 'Grade8/taskgrade8session14',
  'Session 15: Pronunciation of "ed" at the End of Words': 'Grade8/taskgrade8session15',
  'Session 16: Sentence Stress - Introduction': 'Grade8/taskgrade8session16',
  'Session 17: The Schwa Sound': 'Grade8/taskgrade8session17',
  'Session 18: Punctuation - A': 'Grade8/taskgrade8session18',
  'Session 19: Silent Reading (Ram)': 'Grade8/taskgrade8session19',
  'Session 20: Order of Words': 'Grade8/taskgrade8session20',
  'Session 21: Informal Letter Writing': 'Grade8/taskgrade8session21',
  'Session 22: Question Tags - Meaning': 'Grade8/taskgrade8session22',
  'Session 23: Speaking Skills (Friends and Friendships - A)': 'Grade8/taskgrade8session23',
  'Session 24: Speaking Skills (Friends and Friendships - B)': 'Grade8/taskgrade8session24',
  'Session 25: Speaking Skills (Friends and Friendships - C)': 'Grade8/taskgrade8session25',
  'Session 26: Writing Skills (Raj Forgot his Tiffin)': 'Grade8/taskgrade8session26',
  'Session 27: Formal Letter Writing': 'Grade8/taskgrade8session27',
  'Session 28: Punctuation - B': 'Grade8/taskgrade8session28',
  'Session 29: Transformation of Sentences - Introduction': 'Grade8/taskgrade8session29',
  'Session 30: Writing Skills (Neil\'s Father Gets Exciting News)': 'Grade8/taskgrade8session30',
  'Session 31: Speaking Skills (Hobbies and Interests - A)': 'Grade8/taskgrade8session31',
  'Session 32: Speaking Skills (Hobbies and Interests - B)': 'Grade8/taskgrade8session32',
  'Session 33: Speaking Skills (Hobbies and Interests - C)': 'Grade8/taskgrade8session33',
  'Session 34: Paragraph and Blog Writing': 'Grade8/taskgrade8session34',
  'Session 35: Common Speech Errors': 'Grade8/taskgrade8session35',
  'Session 36: Listening - Speech (Social Networking)': 'Grade8/taskgrade8session36',
  'Session 37: E-mail Writing': 'Grade8/taskgrade8session37',
  'Session 38: Intonation and Modulation': 'Grade8/taskgrade8session38'
};

const TaskGrade8FoundationPage = () => {
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
        <h2>English | Module6</h2>
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

export default TaskGrade8FoundationPage;
