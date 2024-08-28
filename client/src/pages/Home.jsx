import React from "react";

const Home = ({ scrollToSection }) => {
  return (
    <div className="welcome-section">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm [Your Name]. I'm a [Your Profession/Title].</p>
      <button onClick={() => scrollToSection("about")}>
        Scroll to learn more
      </button>
    </div>
  );
};

export default Home;
