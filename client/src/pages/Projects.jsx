import { useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

import { FaArrowRight, FaGithubAlt } from "react-icons/fa";

import ReactDOM from "react-dom";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 0,
    title: "Good Recipes",
    imgName: "recipes",
    description:
      "Good Recipes is a website I am currently working on with a focus on a stylistic, suitable, and creative user interface mostly using Tailwind. The website, being cooking themed and is meant to showcase my favorite recipes however, for development purposes and since the majority of the site remains unfinished, the website is filled with A.I. generated recipes. ",
    url: "https://landonsrecipes.netlify.app/",
    githubUrl: "https://github.com/landonkimber/good-recipes",
    createdOn: "June 8th, 2025",
  },
  {
    id: 1,
    title: "Demo Site",
    imgName: "demo",
    description:
      "My Demo Site, is a result of the compenent system of React. This site features a wide variety of webpage styles using Tailwind by allowing the user to swap out website components.",
    url: "https://landons-demo-site.netlify.app/",
    githubUrl: "https://github.com/landonkimber/demo-site",
    createdOn: "July 7th, 2025",
  },
  {
    id: 2,
    title: "Lanae Kimber Counseling",
    imgName: "lanaekimber",
    description:
      "Lanae Kimber Counseling is a website for and used by Lanae Kimber for her therapy services. The project was made with Vite + React and styled using Tailwind.",
    url: "https://lanaekimbercounseling.com",
    githubUrl: "https://github.com/landonkimber/lanae-kimber-counseling",
    createdOn: "November 25, 2024",
  },

  {
    id: 3,
    title: "Cornerstone",
    imgName: "cornerstone",
    description:
      "This is a website that was made for Cornerstone Franchising. A simple site made using with Vite + React.",
    url: "",
    githubUrl: "https://github.com/landonkimber/cornerstone-franchise-site",
    createdOn: "June 10, 2024",
  },
];

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const projectImage = `/projectImages/project-${project.imgName.toLowerCase()}.png`;
  return (
    <ModalPortal>
      <div className=" test-modal project-modal">
        <div className="project-modal-header">
          <h1 className="project-modal-h1 ubuntu-bold">{project.title}</h1>
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>
        <div className="project-modal-content">
          {/* LEFT SIDE */}
          <div className="project-modal-left-container">
            <div className="project-modal-image">
              <img
                src={projectImage}
                alt={project.title}
                className="project-modal-image"
              />
            </div>
            <div className="project-modal-tools"></div>
          </div>
          {/* RIGHT SIDE */}
          <div className="project-modal-right-container">
            <p className="project-modal-createdOn">
              Created on : {project.createdOn}
            </p>
            <p className="project-modal-description">{project.description}</p>
            <br />
            <h2>{project.url}</h2>
            <a href={project.url}>
              <button className="project-modal-link-button">
                Visit Here!
                <FaArrowRight className="project-modal-button-icon" />
              </button>
            </a>
            <a href={project.githubUrl}>
              <button className="project-modal-github-button">
                <FaGithubAlt className="project-modal-button-icon" /> Project
                Github Repo
              </button>
            </a>
          </div>
        </div>
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
