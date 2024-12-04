import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <h1 className = "text-center m-3">Trey Tayler Smith</h1>
    <ul className="nav nav-tabs justify-content-center mt-4 mb-2 fs-5  ">
      <li className="nav-item border-dark ">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active " : "nav-link text-dark"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Works"
          className={currentPage === "/Works" ? "nav-link active" : "nav-link text-dark"}
        >
          Works
        </Link>
      </li>
      <li className="nav-item">
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link text-dark"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link text-dark"}
        >
          Resume
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
