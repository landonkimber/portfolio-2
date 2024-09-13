import React from "react";

const Home = ({ scrollToSection }) => {
  // Helper function to generate a random number within a range
  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  // Helper function to generate a value with a bias towards the center (bell curve-like distribution)
  const bellCurveRandom = (min, max, skew = 1) => {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return bellCurveRandom(min, max, skew); // resample between 0 and 1 if out of range

    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
  };

  return (
    <div className="page-content">
      {[...Array(25)].map((_, i) => {
        const colorVars = [
          "--primary-bg-color",
          "--secondary-bg-color",
          "--primary-text-color",
          "--secondary-text-color",
          "--accent-color",
          "--white",
          "--red",
        ];
        const randomColorVar =
          colorVars[Math.floor(Math.random() * colorVars.length)];

        return (
          <div
            key={i}
            id={`test-block${i + 1}`}
            className="test1"
            style={{
              position: "fixed",
              [i % 2 === 0 ? "bottom" : "top"]: 0,
              left:
                i % 2 === 0
                  ? `${bellCurveRandom(-50, 110)}vw` // For bottom blocks
                  : `${bellCurveRandom(-10, 140)}vw`, // For top blocks
              width: `${randomBetween(2.4, 7.2)}vw`,
              height: `${randomBetween(26, 73)}vh`,
              transform: "skew(-60deg)",
              transition: "ease-in-out 0.9s",
              backgroundColor: `rgb(from var(${randomColorVar}) r g b / 0.03)`,
              zIndex: 0,
            }}
          ></div>
        );
      })}
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
