import React from "react";
import { useSettings } from "../contexts/SettingsContext";

const About = () => {
  const { settings } = useSettings();
  const birthYear = 2003;

  const birthAge = new Date().getFullYear() - birthYear;

  return (
    <div className="page-content">
      <header className="basic-header" data-page-width={settings.contentWidth}>
        <h1>About</h1>
      </header>
      <div
        className="content-container"
        data-page-width={settings.contentWidth}
      >
        <div className="about-content">
          <h2>Hi, I'm Landon Kimber!</h2>
          <img
            id="skiing-image"
            src="./aboutImages/skiing.jpg"
            alt="Picture of Landon skiing at Snow Basin"
          />
          <p>
            &emsp;I am {birthAge} years old and was born and raised in Ogden,
            UT. I enjoy all things in this beautiful state including hiking,
            fishing, and skiing. While inside, I have always enjoyed using,
            learning, and creating with technology. Whether it be choosing the
            correct parts for my PC, creating digital artwork, playing video
            games, or coding, I have always been fascinated with computers and
            the endless possibilities computers bring.
          </p>
          <img
            id="rome-image"
            src="./aboutImages/rome.jpg"
            alt="Picture of Landon at the Roman Forum in Rome, Italy"
          />
          <p className="tab">
            &emsp;Coding in particular has always been an interest of mine
            because of the near limitless possibilities that come with it. From
            following GameMaker tutorials on YouTube as a kid to coding Java
            calculators in high school, I have always enjoyed the problem
            solving and creativity that comes with coding. While unsure for the
            longest time after high school, I have now decided to pursue a
            career in web development. I have graduated from the University of
            Utah full stack development bootcamp and am currently looking to
            start my career in web development. Through the bootcamp, I have
            gained experience in HTML, CSS, JavaScript, Node.js, Express.js,
            React, MongoDB, MySQL, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
