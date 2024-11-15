export default function NavTabs({ project }) {
  return (
    <div>
        {project.link?
      <a href={`${project.repo}`} className="ms-2 me-auto">
        Repo
      </a>
      :
      <div>
      </div>}
      <a href={`${project.link}`} className="ms-2 me-auto">
        Deployed Application
      </a>
    </div>
  );
}
