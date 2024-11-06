import React from 'react'
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">

<div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "500px" }}>
    <h2 className="text-center mb-4">Register</h2>
    <form>
      <div className="mb-3">
        <label for="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
      </div>
      <div className="mb-3">
        <label for="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter your password" required />
      </div>
      <button type="submit" className="btn bg-dark text-light w-100">Register</button>
      <div className="text-center mt-3">
        <p>Already have an account? <Link to="/Login">Login here</Link></p>
      </div>
    </form>
  </div>
</div>
  )
}
