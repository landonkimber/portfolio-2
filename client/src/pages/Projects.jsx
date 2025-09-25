import { useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

import ReactDOM from "react-dom";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 0,
    title: "Good Recipes",
    imgName: "recipes",
    description: "Description for Project 3",
  },
  {
    id: 1,
    title: "Demo Site",
    imgName: "demo",
    description: "Description for Project 4",
  },
  {
    id: 2,
    title: "Lanae Kimber Counseling",
    imgName: "lanaekimber",
    description:
      "Lanae Kimber Counseling is a website for and used by Lanae Kimber for her therapy services. The project was made with Vite+React and styled using Tailwind.",
  },
  {
    id: 3,
    title: "Cornerstone",
    imgName: "cornerstone",
    description: "Description for Project 2",
  },
];

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <ModalPortal>
      <div className="test-modal">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </ModalPortal>
  );
};

const Projects = () => {
  const { settings } = useSettings();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="page-content">
      <header className="basic-header" data-page-width={settings.contentWidth}>
        <h1 className="ubuntu">Projects</h1>
      </header>
      <div
        className="content-container"
        data-page-width={settings.contentWidth}
      >
        {/* imgName will be `"projects-" + ${imgName} + ".png"` */}
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgName={project.imgName}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        ></ProjectModal>
      </div>
    </div>
  );
};

export default Projects;
