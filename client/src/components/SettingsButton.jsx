import React from "react";
import { FiSettings } from "react-icons/fi";
import "./SettingsButton.css"; // We'll create this CSS file next

const SettingsButton = ({ onClick }) => {
  return (
    <button className="settings-button" onClick={onClick} aria-label="Settings">
      <FiSettings size={24} />
    </button>
  );
};

export default SettingsButton;
