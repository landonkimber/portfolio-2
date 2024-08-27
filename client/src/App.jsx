import React from "react";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="scroll-container">
        <section>
          <Welcome />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
