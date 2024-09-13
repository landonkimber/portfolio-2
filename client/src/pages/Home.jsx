import React from "react";

const Home = ({ scrollToSection }) => {
  return (
    <div className="page-content">
      <div className="welcome-container">
        <h1 id="welcome" className="ubuntu">
          Welcome!
        </h1>
        <h3 id="sub-welcome">Made by Landon Kimber</h3>
        <button className="click-here" onClick={() => scrollToSection("about")}>
          Click here!!
        </button>
      </div>
    </div>
  );
};

export default Home;
