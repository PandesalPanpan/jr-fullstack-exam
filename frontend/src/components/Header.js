import React from 'react';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

function Header() {
  const { handleLogout } = useLogout();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"><h3>Jr Fullstack Exam</h3></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-item">Create Item</Link>
          </li>
        </ul>
        <button className="btn btn-outline-danger ml-auto" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Header;