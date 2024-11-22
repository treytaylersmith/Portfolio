export default function NavTabs({ project }) {
  return (
    <div>
      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="ms-2 me-auto"
        >
          Repo
        </a>
      ) : (
        <div></div>
      )}
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ms-2 me-auto"
        >
          Deployed Site
        </a>
      ) : (
        <div></div>
      )}
      <div>
        {project.img ? (
          <img src={`../../src/assets/img/${project.img}`} alt={project.name} />
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <p>{project.descrip}</p>
      </div>
    </div>
  );
}
