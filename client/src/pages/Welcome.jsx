import React from "react";

const Welcome = ({ scrollToNext }) => {
  return (
    <div className="welcome-section">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm [Your Name]. I'm a [Your Profession/Title].</p>
      <button onClick={scrollToNext}>Scroll to learn more</button>
    </div>
  );
};

export default Welcome;
