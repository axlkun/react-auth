import { Link } from "react-router-dom";

const Navigation = (props: { name: string, setName: (name: string) => void }) => {

  const logoutEndpoint = 'http://localhost:8000/api/logout';

  const logout = async () => {
    await fetch(logoutEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });

    props.setName('');
  }

  let menu;

  if (props.name === '') {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link> {/* Reemplaza el enlace "Login" con Link */}
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register">Register</Link> {/* Reemplaza el enlace "Register" con Link */}
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login" onClick={logout}>Logout</Link> {/* Reemplaza el enlace "Login" con Link */}
        </li>
      </ul>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link> {/* Reemplaza el enlace "Home" con Link */}
          <div>
            {menu}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
