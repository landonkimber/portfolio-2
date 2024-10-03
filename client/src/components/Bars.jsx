import React from "react";
import { useSettings } from "../contexts/SettingsContext";

const Bars = () => {
  const { settings } = useSettings();
  const screenWidth = settings.screenWidth;
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

  let blockWidth = `vw`;
  let blockWidthRange = [3, 10];
  let skewAngle = 57;
  if (screenWidth < 800) {
    console.log("screenWidth < 800");
    blockWidth = `in`;
    blockWidthRange = [0.3, 1.8];
  }

  return (
    <div className="bars">
      {[...Array(32)].map((_, i) => {
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
                  ? `${bellCurveRandom(-80, 140)}vw` // For bottom blocks
                  : `${bellCurveRandom(-40, 150)}vw`, // For top blocks
              width: `${randomBetween(
                blockWidthRange[0],
                blockWidthRange[1]
              )}${blockWidth}`,
              height: `${randomBetween(26, 73)}vh`,
              transform: `skew(-${skewAngle}deg)`,
              transition: "ease-in-out 0.9s",
              backgroundColor: `rgb(from var(${randomColorVar}) r g b / 0.03)`,
              zIndex: 0,
            }}
          ></div>
        );
      })}
    </div>
  );
};
export default Bars;
