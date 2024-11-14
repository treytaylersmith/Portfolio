import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody"

export default function ProfileDetailed({ project }) {
  return (
    <div className="card">
      <ProjectHeader project={project} />
      <ProjectBody project = {project} />
    </div>
  );
}
