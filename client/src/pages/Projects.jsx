import React, { useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Affirm",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  { id: 2, title: "Cornerstone", description: "Description for Project 2" },
  { id: 3, title: "Portfolio", description: "Description for Project 3" },
  {
    id: 4,
    title: "More coming soon!",
  },
];

const Projects = () => {
  const { settings } = useSettings();
  return (
    <div className="page-content">
      <header className="basic-header" data-page-width={settings.contentWidth}>
        <h1>Projects</h1>
      </header>
      <div
        className="content-container"
        data-page-width={settings.contentWidth}
      >
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
