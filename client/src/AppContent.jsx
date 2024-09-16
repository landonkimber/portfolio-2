import React, { useRef, useEffect, useState } from "react";

import { useSettings } from "./contexts/SettingsContext";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Settings from "./pages/Settings.jsx";
import NavBarDefault from "./components/NavBars/NavBarDefault.jsx";
import Signature from "./components/Signature.jsx";

import "./App.css";

function App() {
  const { settings } = useSettings();

  console.log(`Current settings: ${JSON.stringify(settings)}`);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
    settings: useRef(null),
  };

  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observers = [];

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(id);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      observers.push(observer);
    });

    // Cleanup function
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="App" data-color={settings.color.toLowerCase()}>
      <NavBarDefault
        scrollToSection={scrollToSection}
        currentSection={currentSection}
      />
      <div className="scroll-container">
        <section id="home" ref={sectionRefs.home}>
          <Home scrollToSection={scrollToSection} />
        </section>
        <section id="about" ref={sectionRefs.about}>
          <About />
        </section>
        <section id="projects" ref={sectionRefs.projects}>
          <Projects />
        </section>
        <section id="contact" ref={sectionRefs.contact}>
          <Contact />
        </section>
        <section id="settings" ref={sectionRefs.settings}>
          <Settings />
        </section>
      </div>
      <Signature />
    </div>
  );
}

export default App;
