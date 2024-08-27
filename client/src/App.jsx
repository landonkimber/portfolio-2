import React, { useRef } from "react";
import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

// import Signature from "./components/Signature.jsx";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
