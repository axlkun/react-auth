import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link> {/* Reemplaza el enlace "Home" con Link */}
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link> {/* Reemplaza el enlace "Login" con Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">Register</Link> {/* Reemplaza el enlace "Register" con Link */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
