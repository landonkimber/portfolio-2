import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

import { useSettings } from "../contexts/SettingsContext";

const Signature = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { settings } = useSettings();

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <footer
      className={`signature ${isVisible ? "visible" : ""}`}
      data-signature-color={settings.color.toLowerCase()}
    >
      <div className="signature-container">
        <FaHeart className="heart-icon" />
        <div className="signature-text">
          <p>Landon Kimber</p>
          <p>2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Signature;
