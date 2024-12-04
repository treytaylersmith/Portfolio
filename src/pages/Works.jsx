import { projects } from "../utils/projects";
import ListItem from "../components/ListItem";
import ProjectTeaser from "../components/ProjectSections/ProjectTeaser";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <div>
      <h1>Works</h1>
      <div className="container pt-4">
        <ul className="list-group ">
          {projects.map((project) => (
            <ListItem key={project.id} >
              {/* Pass the project details to ProjectTeaser component */}
              <ProjectTeaser project={project} />
              {/* Link to the detailed page of the project */}
              <Link
                to={`/project/${project.id}`}
                className="badge bg-primary rounded-pill fs-5"
              >
                See More
              </Link>
            </ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
