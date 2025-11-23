import { Link } from 'react-router-dom';
function Navbar() {
  return (
   
      <div className="box-nav">
        <nav className="navbar navbar-expand-lg fixed-top bg-dark text-white">
          <div className="container">
            <Link className="navbar-brand fs-2 fw-bold text-white" to="/">
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=86985&format=png&color=228BE6"
                  className="logo"
                  alt=""
                />
              </span>{" "}
              codeByMUNE
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-target="#navbarNav"
              data-bs-toggle="collapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    About My
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
   
  );
}
export default Navbar;