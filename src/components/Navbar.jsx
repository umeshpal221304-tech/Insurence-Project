import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          🛡️ SafeLife Insurance
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/plans">Plans</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-light ms-2" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-warning ms-2" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/calculator">
                  Calculator
                </Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link" to="/buy-policy">
                  Buy Policy
               </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

