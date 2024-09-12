import React, { useState } from "react";
import { useSettings } from "../contexts/SettingsContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Affirm",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  { id: 2, title: "Cornerstone", description: "Description for Project 2" },
  { id: 3, title: "Placeholder", description: "Description for Project 3" },
];

const Projects = () => {
  const { settings } = useSettings();
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="page-content">
      <header className="basic-header" data-page-width={settings.contentWidth}>
        <h1>Projects</h1>
      </header>
      <div
        className="content-container content-container-column"
        data-page-width={settings.contentWidth}
      >
        <div className="slideshow-container">
          <h2>{projects[currentIndex].title}</h2>
          <div className="slideshow-image">
            <img
              src={`./projectImages/slide-image-${currentIndex + 1}.png`}
              alt={projects[currentIndex].title}
            />
          </div>
          <p>{projects[currentIndex].description}</p>
        </div>
        <div className="slideshow-controls">
          <button className="slideshow-btn" onClick={previousSlide}>
            <FaArrowLeft />
          </button>

          <div className="slideshow-count">
            <p>
              {currentIndex + 1} / {projects.length}
            </p>
          </div>
          <button className="slideshow-btn" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
