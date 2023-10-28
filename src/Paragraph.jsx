import React, { useState } from 'react';
import './Paragraph.css'; // Import your custom CSS for styling

function Paragraph() {
  const [showContent, setShowContent] = useState(false);
  const [buttonColor, setButtonColor] = useState('blue');

  const toggleContent = () => {
    setShowContent(!showContent);
    setButtonColor(showContent ? 'blue' : 'red');
  };

  return (
    <div className="paragraph-container">
      <h1>Let's Play</h1>
      <button
        className={`play-button ${buttonColor}`}
        onClick={toggleContent}
      >
        {showContent ? 'Hide' : 'Start'}
      </button>
      {showContent ? (
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      ) : (
        <span role="img" aria-label="Smile" className="smile-emoji">
          😊
        </span>
      )}
    </div>
  );
}

export default Paragraph;
