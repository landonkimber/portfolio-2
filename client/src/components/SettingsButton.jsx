import React from "react";

import { FiSettings } from "react-icons/fi";

const SettingsButton = ({ onClick }) => {
  return (
    <button className="settings-button" onClick={onClick} aria-label="Settings">
      <FiSettings size={40} />
    </button>
  );
};

export default SettingsButton;
