export default function NavTabs({ project }) {
  return (
    <div>
      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className="m-2 badge bg-primary rounded-pill fs-5"
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
          type="button"
          className="m-2 badge bg-primary rounded-pill fs-5"
        >
          Deployed Site
        </a>
      ) : (
        <div></div>
      )}
      <div>
        <p className="fs-5">{project.descrip}</p>
      </div>
      <div>
        {project.img ? (
          <img src={`../../src/assets/img/${project.img}`} alt={project.name} />
        ) : (
          <div></div>
        )}
      </div>
      
    </div>
  );
}
