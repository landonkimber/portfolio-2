import React from "react";
import { FaExpandAlt } from "react-icons/fa";

const ProjectCard = ({ title, description }) => {
  const projectImage = `/projectImages/project-${title.toLowerCase()}.png`;

  return (
    <div className="project-card">
      {description ? (
        <button className="project-card-expand">
          <FaExpandAlt />
        </button>
      ) : null}

      <img
        src={projectImage}
        className="project-card-image"
        alt={`${title} project`}
      ></img>
      <h3>{title}</h3>
      {description ? (
        <button className="project-card-view">View more</button>
      ) : null}
    </div>
  );
};

export default ProjectCard;
