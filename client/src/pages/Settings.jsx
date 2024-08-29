import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

const Settings = ({ onClose }) => {
  const { theme, toggleTheme } = useSettings();
  const { color, toggleColor } = useSettings();

  return (
    <div className="settings-content">
      <div className="settings-header">
        <h1>Settings</h1>
      </div>

      {/* SETTINGS CONTAINER */}
      <div className="settings-container">
        {/* Checklist Container */}
        <div className="settings-checklist-container">
          <h2>General</h2>

          <h3>Font Size</h3>
          <div className="settings-checklist-items">
            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaRegCircle size={20} />
              </span>
              <p>Small</p>
            </div>
            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaCheckCircle size={20} />
              </span>
              <p>Standard</p>
            </div>

            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaRegCircle size={20} />
              </span>
              <p>Large</p>
            </div>
          </div>

          <h3>Content Width</h3>
          <div className="settings-checklist-items">
            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaCheckCircle size={20} />
              </span>
              <p>Standard</p>
            </div>
            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaRegCircle size={20} />
              </span>
              <p>Wide</p>
            </div>
          </div>

          <h3>Navigation Bar</h3>
          <div className="settings-checklist-items">
            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaRegCircle size={20} />
              </span>
              <p>Left Handed</p>
            </div>
            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaCheckCircle size={20} />
              </span>
              <p>Right Handed</p>
            </div>
          </div>
        </div>

        {/* THEME CONTAINER */}
        <div className="settings-theme-container">
          <div className="settings-theme-list">
            <h2>Theme</h2>

            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaRegCircle size={20} />
              </span>
              <p>Simple</p>
            </div>

            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaCheckCircle size={20} />
              </span>
              <p>River</p>
            </div>

            <div className="settings-checklist-option">
              <span className="settings-checkbox">
                <FaRegCircle size={20} />
              </span>
              <p>Space</p>
            </div>
          </div>

          {/* COLOR MENU*/}
          <div className="settings-color-menu">
            <h2>Color</h2>
            <div className="settings-color-list">
              <div className="settings-checklist-option">
                <span className="settings-checkbox">
                  <FaRegCircle size={20} />
                </span>
                <p>Light</p>
              </div>

              <div className="settings-checklist-option">
                <span className="settings-checkbox">
                  <FaCheckCircle size={20} />
                </span>
                <p>Dark</p>
              </div>

              <div className="settings-checklist-option">
                <span className="settings-checkbox">
                  <FaCheckCircle size={20} />
                </span>
                <p>Colorful</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
