import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import dayjs from "dayjs";

const Settings = () => {
  const { settings, setSettings } = useSettings();
  const currentMonth = dayjs().format("MMMM").toLowerCase();

  const handleSettingChange = (category, value) => {
    if (category === "color" && value === "Seasonal") {
      value = currentMonth;
    }

    setSettings((prevSettings) => ({
      ...prevSettings,
      [category]: value,
    }));
  };

  var availableSettings = {
    fontSize: ["Small", "Standard", "Large"],
    contentWidth: ["Standard", "Wide"],
    navigationBar: ["Left-Handed", "Right-Handed", "Bottom"],
    theme: ["Simple", "Newspaper"],
    color: ["Light", "Dark", "Seasonal", "Red"],
  };

  if (settings.screenWidth < 480) {
    settings.mobile = true;
    availableSettings.navigationBar = ["Bottom"];
    availableSettings.contentWidth = ["Wide"];
  } else if (settings.screenWidth < 800) {
    availableSettings.navigationBar = ["Bottom", "Right-Handed"];
    availableSettings.contentWidth = ["Wide"];
  }

  const ChecklistOption = ({ category, value, currentValue }) => {
    const isChecked = () => {
      if (
        currentValue === value ||
        (currentValue === currentMonth && value === "Seasonal")
      ) {
        return true;
      }
    };

    return (
      <div
        className={`settings-checklist-option checkbox-highlighted-${isChecked()}`}
        id={`${category}-${value}`}
        onClick={() => handleSettingChange(category, value)}
      >
        <span
          className={`settings-checkbox settings-checkbox-mobile-${settings.mobile}`}
        >
          {isChecked() ? (
            <FaCheckCircle size={20} />
          ) : (
            <FaRegCircle size={20} />
          )}
        </span>
        <p>{value}</p>
      </div>
    );
  };

  return (
    <main className="page-content" data-color={settings.color.toLowerCase()}>
      <header className="basic-header" data-page-width={settings.contentWidth}>
        <h1>Settings</h1>
      </header>
      <div
        className="content-container content-container-column"
        data-page-width={settings.contentWidth}
      >
        <div className="settings-checklist-header">
          <h2>Theme Settings</h2>
        </div>
        <div className="settings-theme-container">
          <div className="settings-theme-theme-menu">
            <div className="settings-theme-theme-menu-header">
              <h2>T</h2>
              <h2>H</h2>
              <h2>E</h2>
              <h2>M</h2>
              <h2>E</h2>
            </div>
            <div className="settings-theme-theme-list">
              {availableSettings.theme.map((theme) => (
                <ChecklistOption
                  key={theme}
                  category="theme"
                  value={theme}
                  currentValue={settings.theme}
                />
              ))}
            </div>
          </div>
          <div className="settings-theme-color-menu">
            <div className="settings-theme-color-menu-header">
              <h2>C</h2>
              <h2>O</h2>
              <h2>L</h2>
              <h2>O</h2>
              <h2>R</h2>
            </div>
            <div className="settings-theme-color-list">
              {availableSettings.color.map((color) => (
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
        <div className="settings-checklist-container">
          <div className="settings-checklist-header">
            <h2>General Settings</h2>
          </div>
          <div className="settings-checklist-content">
            <div className="settings-checklist">
              <h3>Font Size</h3>
              <div className="settings-checklist-items">
                {availableSettings.fontSize.map((size) => (
                  <ChecklistOption
                    key={size}
                    category="fontSize"
                    value={size}
                    currentValue={settings.fontSize}
                  />
                ))}
              </div>
            </div>
            <div className="settings-checklist">
              <h3>Content Width</h3>
              <div className="settings-checklist-items">
                {availableSettings.contentWidth.map((width) => (
                  <ChecklistOption
                    key={width}
                    category="contentWidth"
                    value={width}
                    currentValue={settings.contentWidth}
                  />
                ))}
              </div>
            </div>
            <div className="settings-checklist">
              <h3>Navigation Bar</h3>
              <div className="settings-checklist-items">
                {availableSettings.navigationBar.map((nav) => (
                  <ChecklistOption
                    key={nav}
                    category="navigationBar"
                    value={nav}
                    currentValue={settings.navigationBar}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;
