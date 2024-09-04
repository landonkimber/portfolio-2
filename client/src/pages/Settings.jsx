import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

const Settings = () => {
  const { settings, setSettings } = useSettings();

  const handleSettingChange = (category, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [category]: value,
    }));
  };

  const ChecklistOption = ({ category, value, currentValue }) => (
    <div
      className="settings-checklist-option"
      onClick={() => handleSettingChange(category, value)}
    >
      <span className="settings-checkbox">
        {currentValue === value ? (
          <FaCheckCircle size={20} />
        ) : (
          <FaRegCircle size={20} />
        )}
      </span>
      <p>{value}</p>
    </div>
  );

  return (
    <div className="page-content" data-color={settings.color.toLowerCase()}>
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      <div className="settings-container">
        <div className="settings-checklist-container">
          <h2>General</h2>
          <h3>Font Size</h3>
          <div className="settings-checklist-items">
            {["Small", "Standard", "Large"].map((size) => (
              <ChecklistOption
                key={size}
                category="fontSize"
                value={size}
                currentValue={settings.fontSize}
              />
            ))}
          </div>
          <h3>Content Width</h3>
          <div className="settings-checklist-items">
            {["Standard", "Wide"].map((width) => (
              <ChecklistOption
                key={width}
                category="contentWidth"
                value={width}
                currentValue={settings.contentWidth}
              />
            ))}
          </div>
          <h3>Navigation Bar</h3>
          <div className="settings-checklist-items">
            {["Left-Handed", "Right-Handed"].map((nav) => (
              <ChecklistOption
                key={nav}
                category="navigationBar"
                value={nav}
                currentValue={settings.navigationBar}
              />
            ))}
          </div>
        </div>
        <div className="settings-theme-container">
          <div className="settings-theme-menu">
            <h2>Theme</h2>
            <div className="settings-theme-list">
              {["Simple", "River"].map((theme) => (
                <ChecklistOption
                  key={theme}
                  category="theme"
                  value={theme}
                  currentValue={settings.theme}
                />
              ))}
            </div>
          </div>
          <div className="settings-theme-menu">
            <h2>Color</h2>
            <div className="settings-theme-list">
              {["Light", "Dark", "Colorful"].map((color) => (
                <ChecklistOption
                  key={color}
                  category="color"
                  value={color}
                  currentValue={settings.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
