import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Project from "../components/ProjectSections/ProjectDetailed";
import Container from "../components/ListItem";
import { projects } from "../utils/projects";

export default function ProjectPage() {
  const [project, setProject] = useState(null);  // set default to null
  const { id } = useParams();

  const fetchProject = () => {
    // Assuming id in the URL is a string, and project.id is a number
    const foundProject = projects.find(p => String(p.id) === id); // Convert id to string for comparison
    if (foundProject) {
      setProject(foundProject);
    } else {
      console.log("Project not found!");
      setProject(null);  // in case the project is not found
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);  // Re-run fetchProject whenever the id changes

  return (
    <>
      <Container>
        {project ? (
          <Project project={project} />
        ) : (
          <p>Loading...</p>
        )}
      </Container>
      <footer className="profile-footer">
        <Link to="/works" className="badge bg-primary rounded-pill fs-5 m-2">← Go Back</Link>
      </footer>
    </>
  );
}
