import React, { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useSettings } from "../../contexts/SettingsContext";

const NavBarDefault = ({ scrollToSection, currentSection }) => {
  const { settings } = useSettings();

  return (
    <nav className="navbar" data-navbar-side={settings.navigationBar}>
      <a
        className={`nav-item ${currentSection === "home" ? "active" : ""}`}
        data-tooltip="Home"
        onClick={() => scrollToSection("home")}
      >
        <FaHome />
      </a>
      <a
        className={`nav-item ${currentSection === "about" ? "active" : ""}`}
        data-tooltip="About"
        onClick={() => scrollToSection("about")}
      >
        <FaUser />
      </a>
      <a
        className={`nav-item ${currentSection === "projects" ? "active" : ""}`}
        data-tooltip="Projects"
        onClick={() => scrollToSection("projects")}
      >
        <FaProjectDiagram />
      </a>
      <a
        className={`nav-item ${currentSection === "contact" ? "active" : ""}`}
        data-tooltip="Contact"
        onClick={() => scrollToSection("contact")}
      >
        <FaEnvelope />
      </a>
      <a
        className={`nav-item ${currentSection === "settings" ? "active" : ""}`}
        data-tooltip="Settings"
        onClick={() => scrollToSection("settings")}
      >
        <FaGear />
      </a>
    </nav>
  );
};

export default NavBarDefault;
