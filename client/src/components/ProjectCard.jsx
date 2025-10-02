import { FaExpandAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, imgName, onClick }) => {
  const projectImage = `/projectImages/project-${imgName.toLowerCase()}.png`;

  return (
    <div className="project-card" onClick={onClick}>
      {description ? (
        <button className="project-card-expand">
          <FaExpandAlt />
        </button>
      ) : null}
      <h3 className="project-card-title  ubuntu-bold">{title}</h3>
      <img
        src={projectImage}
        className="project-card-image"
        alt={`${title} project`}
      ></img>
    </div>
  );
};

export default ProjectCard;
