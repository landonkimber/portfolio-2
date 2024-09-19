import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  const timer = setTimeout(() => {
    setIsVisible(true);
  }, 5000);

  return (
    <div className="page-content">
      <div className="welcome-container">
        <div className="welcome">
          <h1 className="ubuntu-bold">Welcome!</h1>
          <p className="sub-welcome">Made by Landon Kimber</p>
        </div>
        <div className="click-here-container">
          <h3 className={`click-hint ${isVisible ? "" : "invisible"}`}>
            Click here &gt;
          </h3>
          <button
            className="click-here"
            onClick={() => scrollToSection("about")}
          >
            <FaArrowCircleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
