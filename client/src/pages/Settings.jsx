import React from "react";
import { useSettings } from "../contexts/SettingsContext";

const Settings = ({ onClose }) => {
  const { theme, toggleTheme } = useSettings();

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <h3>Theme</h3>
        <select value={theme} onChange={(e) => toggleTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
