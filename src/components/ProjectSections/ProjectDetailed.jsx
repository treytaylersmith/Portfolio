import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody"

export default function ProjectDetailed({ project }) {
  return (
    <div className="card">
      <ProjectHeader project={project} />
      <ProjectBody project = {project} />
    </div>
  );
}
