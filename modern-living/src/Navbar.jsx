import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="bg-image">
        <nav className="navbar navbar-expand-lg fixed-top ">
          <div className="container bottom-border">
            <Link className="navbar-brand fs-2 fw-bold" to="/">
              
              ISTUDIO
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
              <ul className="navbar-nav ms-auto d-flex gap-3">
                <li className="nav-item">
                  <Link className="nav-link active hov" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hov" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hov" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hov" to="/projects">
                    Projects
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link hov" to="/pages">
                    Pages
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link hov" to="/contact">
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