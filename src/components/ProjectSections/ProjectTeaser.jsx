export default function ProjectTeaser({ project: {name, img, link, repo, descrip } }) {
    const usernameConcat = `(${username})`;
  
    return (
      <>
        <div className="ms-2 me-auto">
            <img src="img" alt= {name} />
          <h2 className="fw-bold mb-1">{name}</h2>
          
        </div>
      </>
    );
  }
  