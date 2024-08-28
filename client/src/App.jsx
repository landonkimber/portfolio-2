import React, { useRef } from "react";

import { SettingsProvider } from "./contexts/SettingsContext";
import ThemeManager from "./components/ThemeManager";

import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Settings from "./pages/Settings.jsx";

// import Signature from "./components/Signature.jsx";
import SettingsButton from "./components/SettingsButton.jsx";

import "./App.css";
import "./styles/global.css";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const settingsRef = useRef(null);

  const [showSettings, setShowSettings] = React.useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <SettingsProvider>
      <ThemeManager />
      <div className="App">
        <SettingsButton onClick={toggleSettings} />
        {showSettings ? (
          <Settings onClose={toggleSettings} />
        ) : (
          <div className="scroll-container">
            <section>
              <Welcome scrollToNext={() => scrollToSection(aboutRef)} />
            </section>
            <section ref={aboutRef}>
              <About />
            </section>
            <section ref={projectsRef}>
              <Projects />
            </section>
            <section ref={contactRef}>
              <Contact />
            </section>
          </div>
        )}
      </div>
    </SettingsProvider>
  );
}

export default App;
