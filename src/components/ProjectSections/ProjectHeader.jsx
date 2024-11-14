export default function ProjectHeader({ project }) {
  return (
    <div className="card-header">
      <ProfileTeaser user={project} />
      <a href={`${project.link}`} className="ms-2 me-auto">
        Repo
      </a>
    </div>
  );
}
