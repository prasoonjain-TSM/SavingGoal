
import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info  shadow-sm p-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-muted " to="/">Saving Goals</Link>
        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item nav-item-custom">
              <Link className="nav-link btn btn-light text-muted rounded-pill " to="/ShowTask">Show Task</Link>
            </li>
            <li className="nav-item nav-item-custom">
              <Link className="nav-link btn btn-light text-muted rounded-pill" to="/CompareTask">Compare Task</Link>
            </li>
            <li className="nav-item nav-item-custom">
              <Link className="nav-link btn btn-light text-muted rounded-pill" to="/Record">Records</Link>
            </li>
            
          </ul>
          
          <ul className="navbar-nav ms-auto nav-item-custom">
          <li className="nav-item nav-item-custom ">
              <Link className="nav-link text-light" to="#">
                <i className="fas fa-bell"></i>
                <span className="badge bg-danger ms-1">3</span> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-light text-muted rounded-pill px-3 me-2" to="/Login">Login</Link>
            </li>
            <li className="nav-item nav-item-custom">
              <Link className="nav-link btn btn-light text-muted rounded-pill px-3" to="/Register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
