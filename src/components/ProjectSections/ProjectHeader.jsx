import ProjectTeaser from "./ProjectTeaser";

export default function ProjectHeader({ project }) {
  return (
    <div className="card-header">
      <ProjectTeaser project={project} />
      

    </div>
  );
}
