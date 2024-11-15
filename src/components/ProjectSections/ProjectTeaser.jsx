export default function ProjectTeaser({ project: { name, img, link, repo, descrip } }) {
  return (
    <div className="ms-2 me-auto">
      <h2 className="fw-bold mb-1">{name}</h2>
      {/* Add image or description if needed */}
    </div>
  );
}
