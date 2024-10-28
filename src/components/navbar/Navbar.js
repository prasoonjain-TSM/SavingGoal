import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm p-3">
  <div className="container">
    <Link className="navbar-brand fw-bold text-light" to="/">MySite</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/ShowTask">Show Task</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/CompareTask">Compare Task</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Records">Records</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="#">
            <i className="fas fa-bell"></i>
            <span className="badge bg-danger ms-1">3</span> 
          </Link>
        </li>
      </ul>
      
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-light rounded-pill px-3 me-2" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-warning text-dark rounded-pill px-3" to="/Register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
