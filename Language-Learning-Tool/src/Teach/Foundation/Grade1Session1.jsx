import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './GradePage.css'; // Import the CSS file for styling
import classroomTeachingImg from '../../assets/page4Images/Asset 135@4x.png';
import storyTellingImg from '../../assets/page4Images/Asset 134@4x.png';
import practiceSessionImg from '../../assets/page4Images/Asset 136@4x.png';
import challengeYourselfImg from '../../assets/page4Images/Asset 137@4x.png';

const Grade1Page = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Functions to close the modals/popups
  const closeVideoModal = () => setIsVideoModalOpen(false);
  const closePdfModal = () => setIsPdfModalOpen(false);
  const closePopup = () => setIsPopupOpen(false);
  const closeSecondPopup = () => setIsSecondPopupOpen(false);

  // Click Handlers for navigation
  const handleLearningVideosClick = () => navigate('/learning-videos');
  const handleVocabularyClick = () => navigate('/Vocabulary');
  const handleLessonPlanClick = () => setIsPdfModalOpen(true); // Open PDF modal
  const handleAudioVisualClick = () => navigate('/audio-visual');
  const handleCBTClick = () => navigate('/cbt');
  const handleQuizClick = () => navigate('/quiz');
  const handleBoggleClick = () => navigate('/boggle');
  const handleTestClick = () => navigate('/test');

  return (
    <div className="grade-container">
      <div className="main-content">
        <div className="header1">
          <h2>Grade 1 | Foundation | Session 1: Meet the Children</h2>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Classroom Teaching Card */}
          <div className="content-item">
            <h3>Classroom Teaching</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <ul>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleLearningVideosClick}
                >
                  Learning Videos
                </li>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleVocabularyClick}
                >
                  Vocabulary
                </li>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleLessonPlanClick}
                >
                  Lesson Plan
                </li>
              </ul>
            </div>
          </div>

          {/* Story Telling Card */}
          <div className="content-item">
            <h3>Story Telling</h3>
            <div className="content-item-content">
              <img src={storyTellingImg} alt="Story Telling" />
              <ul>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleAudioVisualClick}
                >
                  Audio/Visual
                </li>
              </ul>
            </div>
          </div>

          {/* Practice Session Card */}
          <div className="content-item">
            <h3>Practice Session</h3>
            <div className="content-item-content">
              <img src={practiceSessionImg} alt="Practice Session" />
              <ul>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleCBTClick}
                >
                  CBT (Computer Based Learning)
                </li>
              </ul>
            </div>
          </div>

          {/* Challenge Yourself Card */}
          <div className="content-item">
            <h3>Challenge Yourself</h3>
            <div className="content-item-content">
              <img src={challengeYourselfImg} alt="Challenge Yourself" />
              <ul>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleQuizClick}
                >
                  Quiz
                </li>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleBoggleClick}
                >
                  Boggle
                </li>
                <li
                  style={{ color: 'black', textDecoration: 'underline' }}
                  onClick={handleTestClick}
                >
                  Test
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal-overlay">
          <div className="video-modal-content">
            <button className="close-video-modal" onClick={closeVideoModal}>
              X
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://youtube.com/embed/-ERWlp828kY?si=SECeltEHU1F669g2"
              title="Self Review Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {isPdfModalOpen && (
        <div className="pdf-modal-overlay">
          <div className="pdf-modal-content">
            <button className="close-pdf-modal" onClick={closePdfModal}>
              X
            </button>
            <iframe
              src="/src/assets/pdf/School Profile  Final 2024.pdf"
              title="Lesson Plan PDF"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}

      {/* Popups */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-icon">
              <img src="https://path-to-your-icon.png" alt="Icon" />
            </div>
            <h3>View the content for ?</h3>
            <div className="popup-buttons">
              <button>Teaching</button>
              <button>Self Review</button>
            </div>
          </div>
        </div>
      )}

      {isSecondPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content select-class-popup show-dropdown">
            <h3>Select Class</h3>
            <select className="select-class">
              <option value="">Select Class</option>
              {/* Add your class options here */}
            </select>
            <div className="popup-buttons">
              <button className="go-button">GO</button>
              <button className="cancel-button" onClick={closeSecondPopup}>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade1Page;
