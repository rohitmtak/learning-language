import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HomePage.css'; 

// Import grade images
import grade1Img from '../../assets/firstpagejpg/secondpagejpg/Asset 35@4x.png';
import grade2Img from '../../assets/firstpagejpg/secondpagejpg/Asset 34@4x.png';
import grade3Img from '../../assets/firstpagejpg/secondpagejpg/Asset 33@4x.png';
import grade4Img from '../../assets/firstpagejpg/secondpagejpg/Asset 32@4x.png';
import grade5Img from '../../assets/firstpagejpg/secondpagejpg/Asset 31@4x.png';
import grade6Img from '../../assets/firstpagejpg/secondpagejpg/Asset 30@4x.png';
import grade7Img from '../../assets/firstpagejpg/secondpagejpg/Asset 29@4x.png';
import grade8Img from '../../assets/firstpagejpg/secondpagejpg/Asset 28@4x.png';
import grade9Img from '../../assets/firstpagejpg/secondpagejpg/Asset 27@4x.png';
import grade10Img from '../../assets/firstpagejpg/secondpagejpg/Asset 26@4x.png';
import grade11Img from '../../assets/firstpagejpg/secondpagejpg/Asset 25@4x.png';
import grade12Img from '../../assets/firstpagejpg/secondpagejpg/Asset 24@4x.png';

const HomePage = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleGradeClick = (grade) => {
    if (grade === 1) {
      navigate('/grade1'); // Redirect to the Grade 1 page
    } else if (grade === 2) {
      navigate('/grade2-foundation'); // Redirect to the Grade 2 page
    }
   else if (grade === 3) {
    navigate('/grade3-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 4) {
    navigate('/grade4-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 5) {
    navigate('/grade5-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 6) {
    navigate('/grade6-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 7) {
    navigate('/grade7-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 8) {
    navigate('/grade8-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 9) {
    navigate('/grade9-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 10) {
    navigate('/grade10-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 11) {
    navigate('/grade11-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 12) {
    navigate('/grade12-foundation'); // Redirect to the Grade 3 page
  }
    // Add more conditions for other grades if needed
  };

  return (
    <div className="main-content">
      <div className="header">
        <h2>Neo Language Labs</h2>
        <div className="language-select">
          <label htmlFor="language">Select Language</label>
          <select id="language">
            <option value="english">English</option>
           
          </select>
        </div>
      </div>
      <div className="grid-item" onClick={() => handleGradeClick(1)}>
        <img src={grade1Img} alt="Grade 1" />
      </div>
      <div className="grid-item" onClick={() => handleGradeClick(2)}>
        <img src={grade2Img} alt="Grade 2" />
      </div>
      <div className="grid-item" onClick={() => handleGradeClick(3)}>
        <img src={grade3Img} alt="Grade 3" />
      </div>
      <div className="grid-item" onClick={() => handleGradeClick(4)}>
        <img src={grade4Img} alt="Grade 4" />
      </div>
      <div className="grid-item"onClick={() => handleGradeClick(5)}>
        <img src={grade5Img} alt="Grade 5" />
        </div>
      <div className="grid-item"onClick={() => handleGradeClick(6)}>
        <img src={grade6Img} alt="Grade 6" />
        </div>
      <div className="grid-item"onClick={() => handleGradeClick(7)}>
        <img src={grade7Img} alt="Grade 7" />
        </div>
      <div className="grid-item"onClick={() => handleGradeClick(8)}>
        <img src={grade8Img} alt="Grade 8" />
        </div>
      <div className="grid-item"onClick={() => handleGradeClick(9)}>
        <img src={grade9Img} alt="Grade 9" />
        </div>
      <div className="grid-item"onClick={() => handleGradeClick(10)}>
        <img src={grade10Img} alt="Grade 10" />
        </div>
      <div className="grid-item"onClick={() => handleGradeClick(11)}>
        <img src={grade11Img} alt="Grade 11" />
        </div>
      <div className="grid-item"onClick={() => handleGradeClick(12)}>
        <img src={grade12Img} alt="Grade 12" />
        </div>
    </div>
  );
};

export default HomePage;
