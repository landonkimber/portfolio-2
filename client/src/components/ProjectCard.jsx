import React from "react";
import { FaExpandAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, imgName }) => {
  const projectImage = `/projectImages/project-${imgName.toLowerCase()}.png`;

  return (
    <div className="project-card">
      {description ? (
        <button className="project-card-expand">
          <FaExpandAlt />
        </button>
      ) : null}
      <h3 className="project-card-title">{title}</h3>
      <img
        src={projectImage}
        className="project-card-image"
        alt={`${title} project`}
      ></img>
      {description ? (
        <button className="project-card-view">View more</button>
      ) : null}
    </div>
  );
};

export default ProjectCard;
